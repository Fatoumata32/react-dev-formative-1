import type { PostData } from '../types'

type PostProps = {
  post: PostData
}

function Post({ post }: PostProps) {
  return (
    <article className="post-card">
      <div className="post-meta">
        <span>{post.author}</span>
        <span aria-hidden="true">/</span>
        <time dateTime={post.date}>{post.date}</time>
      </div>
      <h2>{post.title}</h2>
      <p>{post.preview}</p>
      <a className="read-link" href={`#post-${post.id}`}>
        Read note <span aria-hidden="true">-&gt;</span>
      </a>
    </article>
  )
}

export default Post