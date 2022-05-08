import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections'

export default function Home({ posts }) {
  return (
    <div className="container mx-auto mb-8 px-1">
      <Head>
        <title>Stefan Speter Blog</title>
        <link ref="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8 ">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4 ">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

// Thanks to NextJS, we can fetch data this way instead of inside useEffect()
// getStaticProps send data directly to our component as props
export async function getStaticProps() {
  // get the posts, if empty, return an empty array
  const posts = (await getPosts()) || []

  return {
    props: {
      posts,
    },
  }
}
