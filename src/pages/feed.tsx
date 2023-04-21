import type { NextPage } from 'next'
import Head from 'next/head'
import FeedPost from '../components/feed-post'
import NewPost from '@/components/new-post'

import posts from '../posts.json'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Your Feed</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="vh-150 vw-150 d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-6 mb-3">What do you want to say?</h1>
          <NewPost/>
        <h1 className="display-6 mb-3">Your Feed</h1>
          {Object.keys(posts).map((id: string) => (
              <ul key={id} className="vw-100 ml-10 mr-20">
                <FeedPost {...posts[id] } title={id} />
              </ul>
            ))}
      </main>
    </div>
  )
}

export default Home