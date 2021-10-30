import MeetupList from '../components/meetups/MeetupList'
import Head from 'next/head'
import { Fragment } from 'react'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345, Some city',
    description: 'This is a first meetup'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345, Some city',
    description: 'This is a second meetup'
  }
]

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="React meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
    
  )
}

// executed on the server with every client request
// use if data changes constantly, or if you need access to the request object
// function getServerSideProps(context) {
//   const req = context.req
//   const res = context.res

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

// executed during the build process - will never be deployed to the client
// the page will be faster because it is not regenerated with every request
async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10, // would regenerate this page ON THE SERVER every 10 seconds
  }
}

export {
  HomePage as default,
  getStaticProps,
  // getServerSideProps
}
