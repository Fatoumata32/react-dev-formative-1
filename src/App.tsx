import Header from './components/Header'
import PostList from './components/PostList'
import withLogger from './hoc/withLogger'
import './App.css'

const LoggedHeader = withLogger(Header, 'Header')

function App() {
  return (
    <div className="app-shell">
      <LoggedHeader />
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
