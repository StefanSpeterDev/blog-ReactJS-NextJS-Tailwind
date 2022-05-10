import React from 'react'
import { useRouter } from 'next/router'

import { getCategoryPost, getCategories } from '../../services'
import { PostCard, Loader } from '../../components'

// Page that list posts by the current category

const CategoryPost = ({ posts }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="flex flex-col gap-12 md:flex-row">
        {posts.map((post, index) => (
          <PostCard key={index} post={post.node} />
        ))}
      </div>
    </div>
  )
}
export default CategoryPost

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug)
  return {
    props: {
      posts,
    },
  }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}
