import { useRouter } from 'next/router'

// domain.com/news/something-important

export default function DetailPage() {
  const router = useRouter()

  const { newsId } = router.query
  
  // send a request to fetch the news item with the newsId

  return <h1>The Detail Page</h1>
}
