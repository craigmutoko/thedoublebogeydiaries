import { createFileRoute, Link } from '@tanstack/react-router'
import { marked } from 'marked'
import { allPosts } from 'content-collections'

export const Route = createFileRoute('/posts/$slug')({
  loader: async ({ params }) => {
    const post = allPosts.find((post) => post.slug === params.slug)
    if (!post) {
      throw new Error('Post not found')
    }
    return post
  },
  component: RouteComponent,
})

function RouteComponent() {
  const post = Route.useLoaderData()

  return (
    <>
      <div className="article-header">
        <div className="article-header-inner">
          <Link to="/" className="article-back">
            &larr; Back to Journal
          </Link>
          <span className="tag tag-gold">{post.categories[0]}</span>
          <h1 className="article-title">{post.title}</h1>
          <p className="article-summary">{post.summary}</p>
          <div className="article-meta">
            <span>{post.date}</span>
          </div>
        </div>
      </div>

      <div className="article-body">
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: marked(post.content) as string }}
        />
      </div>
    </>
  )
}
