import { useReducer, useCallback } from "react"

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: null,
  extra: null,
  identifier: null,
}


const httpReducer = (httpState, action) => {
  switch (action.type) {
    case 'SEND': return { loading: true, error: null, data: null, extra: null, identifier: action.identifier }
    case 'RESPONSE': return { ...httpState, loading: false, data: action.data, extra: action.extra }
    case 'ERROR': return { loading: false, error: action.errorMessage }
    case 'CLEAR': return INITIAL_STATE
    default: throw new Error('Should not get here')
  }
}

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, INITIAL_STATE)

  const clear = useCallback(() => dispatchHttp({ type: 'CLEAR' }), [])

  const sendRequest = useCallback((url, method, body, extra, identifier) => {
    dispatchHttp({ type: 'SEND', identifier })
    fetch(url, {
      method,
      body,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        dispatchHttp({ type: 'RESPONSE', data, extra })
      })
      .catch(() => {
        dispatchHttp({ type: 'ERROR', errorMessage: 'Something went wrong!' })
      })
  }, [])

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest,
    reqExtra: httpState.extra,
    reqIdentifier: httpState.identifier,
    clear
  }
}

export default useHttp