import Header from './components/Header'
import PostList from './components/PostList'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <section className="intro">
          <p className="eyebrow">Internal knowledge base</p>
          <h1>Ideas worth sharing.</h1>
          <p className="intro-copy">
            Quick notes and practical lessons from the Dev Insights team.
          </p>
        </section>
        <PostList />
      </main>
    </div>
  )
}

export default App
