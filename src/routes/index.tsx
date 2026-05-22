import { createFileRoute, Link } from '@tanstack/react-router'
import { allPosts } from 'content-collections'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const posts = [...allPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-grid">
          <div>
            <p className="hero-eyebrow fade-up fade-up-1">Personal Golf Journal</p>
            <h1 className="hero-title fade-up fade-up-2">
              The Endless<br />
              <em>Pursuit</em> of<br />
              Par
            </h1>
            <p className="hero-subtitle fade-up fade-up-3">
              A running record of rounds played, lessons absorbed, courses explored,
              and the slow, satisfying descent toward a single-digit handicap.
            </p>
          </div>

          <div className="stats-card fade-up fade-up-4" id="progress">
            <p className="stats-card-title">Journey at a Glance</p>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value gold">14.1</div>
                <div className="stat-label">Current HCP</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">83</div>
                <div className="stat-label">Best Round</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">47</div>
                <div className="stat-label">Rounds This Year</div>
              </div>
              <div className="stat-item">
                <div className="stat-value gold">9</div>
                <div className="stat-label">HCP Goal</div>
              </div>
            </div>
          </div>
        </div>

        <div className="editorial-divider">
          <div className="editorial-divider-line" />
          <div className="editorial-divider-text">Latest from the journal</div>
          <div className="editorial-divider-line" />
        </div>
      </section>

      <div className="main-content">
        {/* Featured Post */}
        {featured && (
          <div className="featured-post">
            <div className="featured-post-image">
              <img
                src={`/${featured.image}`}
                alt={featured.title}
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    parent.style.background = 'linear-gradient(135deg, #2d5a3d 0%, #1a3a2a 100%)'
                  }
                }}
              />
            </div>
            <div className="featured-post-content">
              <span className="tag tag-gold">Featured Round</span>
              <div className="featured-post-meta">{featured.date}</div>
              <h2 className="featured-post-title">{featured.title}</h2>
              <p className="featured-post-summary">{featured.summary}</p>
              <Link to={`/posts/${featured.slug}`} className="read-more-btn">
                Read the full entry &rarr;
              </Link>
            </div>
          </div>
        )}

        {/* Post Grid */}
        {rest.length > 0 && (
          <>
            <div className="section-header">
              <span className="section-title">All Entries</span>
              <span className="section-count">{rest.length} more rounds</span>
            </div>
            <div className="posts-grid">
              {rest.map((post) => (
                <Link key={post._meta.path} to={`/posts/${post.slug}`} className="post-card">
                  <div className="post-card-image">
                    <img
                      src={`/${post.image}`}
                      alt={post.title}
                      onError={(e) => {
                        const target = e.currentTarget
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          const colors = [
                            'linear-gradient(135deg, #2d5a3d 0%, #1a3a2a 100%)',
                            'linear-gradient(135deg, #1a3a2a 0%, #4a7c59 100%)',
                            'linear-gradient(135deg, #3d4a1a 0%, #2a3a1a 100%)',
                          ]
                          parent.style.background = colors[Math.floor(Math.random() * colors.length)]
                        }
                      }}
                    />
                  </div>
                  <div className="post-card-category">{post.categories[0]}</div>
                  <h2 className="post-card-title">{post.title}</h2>
                  <p className="post-card-summary">{post.summary}</p>
                  <span className="post-card-date">{post.date}</span>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}
