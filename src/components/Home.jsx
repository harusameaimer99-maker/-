import styles from './Home.module.css'
import { posts } from '../data/posts'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>記事一覧</h1>
      <div className={styles['post-list']}>
        {posts.map((post) => (
          <div key={post.id} >
            <Link to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}