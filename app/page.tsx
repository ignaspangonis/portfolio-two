import { allPosts } from '@/.contentlayer/generated'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="prose dark:prose-invert">
        <h1>Ignas Pangonis</h1>
        <p>
          I&apos;m a software engineer and a writer. I write about software, technology, and the
          future.
        </p>
      </section>
      <section className="prose dark:prose-invert">
        {allPosts.map(post => (
          <article key={post._id}>
            <Link href={post.slug}>
              <h2>{post.title}</h2>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
      </section>
    </>
  )
}
