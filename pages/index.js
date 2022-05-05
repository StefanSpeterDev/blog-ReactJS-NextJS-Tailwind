import Head from 'next/head'

const posts = [
  {
    title: 'React test',
    excerpt: 'Learn react test',
  },
  {
    title: 'React w tailwind',
    excerpt: 'Learn react w tailwind',
  },
]

export default function Home() {
  return (
    <div className="container mx-auto mb-8 px-1">
      <Head>
        <title>CMS Blog</title>
        <link ref="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className='col-span-1 lg:col-span-8 '>
          {posts.map((item) => (
            <div>
              {item.title}
              <br />
              {item.excerpt}
            </div>
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4 ">
          <div className='relative top-8 lg:sticky'>
            
          </div>
        </div>
      </div>
    </div>
  )
}
