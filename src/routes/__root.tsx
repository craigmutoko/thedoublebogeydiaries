import { HeadContent, Scripts, createRootRoute, Link } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'The Fairway Journal — A Golf Journey' },
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
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
              The Fairway Journal
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
            <div className="footer-logo">The Fairway Journal</div>
            <div className="footer-tagline">Every round, a new chapter</div>
          </div>
        </footer>
        <Scripts />
      </body>
    </html>
  )
}
