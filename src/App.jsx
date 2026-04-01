import './App.css'
import {posts} from './data/posts';

export default function App() {
  return (

    <div>
      <h1>記事一覧</h1>
      <div className="post-list">
        {posts.map((post) => {
          return (
            <div key={post.id} style={{ marginBottom: '20px', borderBottom: '1px solid　#ccc' }}>
              <h2>{post.title}</h2>
              <p> {new Date(post.createdAt).toLocaleDateString()}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}