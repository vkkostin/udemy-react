import { createContext, useState, useEffect, useCallback } from "react"

let logoutTimer;

const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: token => {},
  logout: () => {},
})

const calculateRemainingTime = expirationTime => {
  const currentTime = new Date().getTime()
  const adjustedExpirationTime = new Date(expirationTime).getTime()
  const remainingTime= adjustedExpirationTime - currentTime

  return remainingTime
}

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('react-token')
  const storedExpirationTime = localStorage.getItem('react-expiration-time')

  const remainingTime = calculateRemainingTime(storedExpirationTime)

  const result = { storedToken, remainingTime }

  if (remainingTime <= 6000) {
    localStorage.removeItem('react-token')
    localStorage.removeItem('react-expiration-time')
    result.storedToken = null
    result.remainingTime = null
  }

  return result
}

export const AuthContextProvider = props => {
  const { storedToken, remainingTime } = retrieveStoredToken()

  const [token, setToken] = useState(storedToken)

  const isLoggedIn = !!token

  const logoutHandler = useCallback(() => {
    setToken(null)
    localStorage.removeItem('react-token')
    localStorage.removeItem('react-expiration-time')

    if (logoutTimer) {
      clearTimeout(logoutTimer)
    }
  }, [])

  const loginHandler = (token, expirationTime) => {
    setToken(token)
    localStorage.setItem('react-token', token)
    localStorage.setItem('react-expiration-time', expirationTime)

    const remainingTime = calculateRemainingTime(expirationTime)

    logoutTimer = setTimeout(logoutHandler, remainingTime)
  }

  useEffect(() => {
    if (remainingTime) {
      logoutTimer = setTimeout(logoutHandler, remainingTime)
    }
  }, [remainingTime, logoutHandler])

  const contextValue = {
    token,
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
