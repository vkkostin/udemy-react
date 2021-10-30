import { Fragment, useEffect } from "react"
import { useParams, Route, Link, useRouteMatch } from "react-router-dom"
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import useHttp from "../hooks/use-http"
import { getSingleQuote } from "../lib/api"
import LoadingSpinner from "../components/UI/LoadingSpinner"

const QuoteDetail = () => {
  const match = useRouteMatch()
  const { quoteId } = useParams()

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  if (status === 'pending') {
    return <div className="centered"><LoadingSpinner/></div>
  }

  if (error) {
    return <p className="centered">{error}</p>
  }

  if (!loadedQuote) {
    return <p>No quote found!</p>
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>
  }

  const { text, author } = loadedQuote

  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <HighlightedQuote text={text} author={author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

 export default QuoteDetail