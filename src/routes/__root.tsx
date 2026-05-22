import { HeadContent, Scripts, createRootRoute, Link } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'The Double Bogey Diaries — A Golf Journey' },
      { name: 'description', content: 'A personal record of rounds played, lessons learned, and the endless pursuit of a lower handicap.' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen">
        <div className="noise-overlay" aria-hidden="true" />
        <nav className="site-nav">
          <div className="nav-inner">
            <Link to="/" className="nav-logo">
              <img src="/dblogo.png" alt="The Double Bogey Diaries" style={{ height: '55px', width: 'auto' }} />
            </Link>
            <ul className="nav-links">
              <li><Link to="/">All Rounds</Link></li>
              <li><a href="#progress">Progress</a></li>
              <li><a href="#courses">Courses</a></li>
            </ul>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-logo">The Double Bogey Diaries</div>
            <div className="footer-tagline">Every round, a new chapter</div>
          </div>
        </footer>
        <Scripts />
      </body>
    </html>
  )
}
