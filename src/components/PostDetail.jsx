import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts"; 

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div >
        <h2>記事が見つかりませんでした</h2>
        <Link to="/"> 記事一覧に戻る</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{post.title}</h1>
      <p >
        {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <hr />
      <div 
        
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
      
      <div style={{ marginTop: "40px" }}>
        <Link to="/"> 記事一覧に戻る</Link>
      </div>
    </div>
  );
}
