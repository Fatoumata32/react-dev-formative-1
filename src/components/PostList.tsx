import Post from './Post'
import type { PostData } from '../types'

const posts: PostData[] = [
  {
    id: 1,
    title: 'A calmer way to review pull requests',
    author: 'Maya Chen',
    preview:
      'Small review habits can make feedback clearer, faster, and easier to act on.',
    date: '2026-09-18',
  },
  {
    id: 2,
    title: 'What belongs in a reusable component?',
    author: 'Jon Bell',
    preview:
      'A component earns its place when it gives a repeated idea one clear home.',
    date: '2026-09-15',
  },
  {
    id: 3,
    title: 'Useful questions before shipping CSS',
    author: 'Maya Chen',
    preview:
      'Before polishing a page, check the layout at the edges where real users will see it.',
    date: '2026-09-11',
  },
]

function PostList() {
  return (
    <section className="post-list" aria-labelledby="latest-posts">
      <div className="section-heading">
        <h2 id="latest-posts">Latest notes</h2>
        <span>{posts.length} posts</span>
      </div>
      <div className="posts">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}

export default PostList