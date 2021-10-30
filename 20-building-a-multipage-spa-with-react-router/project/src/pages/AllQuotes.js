import useHttp from '../hooks/use-http'
import QuoteList from '../components/quotes/QuoteList'
import { getAllQuotes } from '../lib/api'
import { useEffect } from 'react'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import NoQuotesFound from '../components/quotes/NoQuotesFound'

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error
  } = useHttp(getAllQuotes, true)

  useEffect(() => {
    sendRequest()
  }, [sendRequest])

  if (status === 'pending') {
    return <div className="centered"><LoadingSpinner/></div>
  }

  if (error) {
    return <div className="centered focused">{error}</div>
  }

  if (status === 'completed' && (!loadedQuotes || !loadedQuotes.length)) {
    return <NoQuotesFound />
  }

  return <QuoteList quotes={loadedQuotes} />
}

 export default AllQuotes