import { allPosts } from '@/.contentlayer/generated'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="prose dark:prose-invert">
        <h1>
          Hey 👋
          <br /> I&apos;m <span className="text-red-400 dark:text-violet-800">Ignas Pangonis</span>
        </h1>
        <p>
          I&apos;m a software engineer at Vinted. I write about what I learned while building
          software, organising work and working with people.
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
