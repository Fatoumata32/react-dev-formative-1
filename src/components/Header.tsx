function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Dev Insights home">
        Dev <span>Insights</span>
      </a>
      <a className="new-post-link" href="#new-post">
        New post <span aria-hidden="true">+</span>
      </a>
    </header>
  )
}

export default Header