import React, { useEffect } from 'react'
import moment from 'moment'

import { RichText } from '@graphcms/rich-text-react-renderer'

import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import Image from 'next/image';

const PostDetail = ({ post }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <article class="post-article">
      <div className="mb-8 rounded-lg bg-white pb-12 shadow-lg dark:bg-lightBlue lg:p-8">
        <div className="relative mb-6 overflow-hidden shadow-md">
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="h-full w-full rounded-t-lg object-top"
          />
        </div>
        <div className="px-4 lg:px-0 ">
          <div className="mb-8 flex w-full items-center">
            <div className="mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="rounded-full align-middle"
                src={post.author.photo.url}
              />
              <p className="ml-2 inline align-middle text-lg text-gray-700 dark:text-blue">
                {post.author.name}
              </p>
            </div>
            <div className="font-medium text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 inline h-6 w-6 text-pink-500 dark:text-blue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="align-middle dark:text-white">
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold dark:text-blue">
            {post.title}
          </h1>
          <RichText
            content={post.content.raw}
            renderers={{
              code_block: ({ children }) => {
                return (
                  <pre className="line-numbers language-none">
                    <code>{children}</code>
                  </pre>
                )
              },
              img: ({ src, altText, height, width }) => (
                <Image
                  src={src}
                  alt={altText}
                  height={height}
                  width={width}
                  objectFit="cover"
                />
              ),
            }}
          />
        </div>
      </div>
    </article>
  )
}

export default PostDetail
