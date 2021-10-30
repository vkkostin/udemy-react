// domain.com/news
import Link from 'next/link'
import { Fragment } from "react"

export default function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">
            NextJS
          </Link>
        </li>
        <li>
          <Link href="/news/ember">
            Ember
          </Link>
        </li>
      </ul>
    </Fragment>
  )
}
