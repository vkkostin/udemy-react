import MeetupDetail from '../../components/meetups/MeetupDetail'
import Head from 'next/head'
import { Fragment } from 'react'

function MeetupDetails({ meetupData }) {
  const { image, title, address, description } = meetupData

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <MeetupDetail
        image={image}
        title={title}
        address={address}
        description={description}
      />
    </Fragment>
  )
}

// typically would reach into the database and generate a list of all supported paths dynamically
function getStaticPaths() {
  return {
    fallback: 'blocking',
    paths: [
      {
        params: {
          meetupId: 'm1'
        } 
      }
    ]
  }
}

function getStaticProps(context) {
  const { meetupId } = context.params

  console.log(meetupId)

  return {
    props: {
      meetupData: {
        id: meetupId,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        title: 'A First Meetup',
        address: 'Some Street 5, Some City',
        description: 'A meetup description',
      }
    }
  }
}

export {
  MeetupDetails as default,
  getStaticPaths,
  getStaticProps
}
