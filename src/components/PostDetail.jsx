import { useParams, Link } from "react-router-dom"
import { useState,useEffect } from "react"

export default function PostDetail() {
  const { id } = useParams();
  const [post,setPost]=useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    const fetcher=async()=>{

        setIsLoading(true)

        const res=await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`)
        const data =await res.json()

        setPost(data.post)
        setIsLoading(false)

    }

    fetcher()
  },[id])



  if (isLoading) {
    return (
      <div>
        <h2>読み込み中...</h2>
        <Link to="/"> 記事一覧に戻る</Link>
      </div>
    );
  }


  
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
      <p >{new Date(post.createdAt).toLocaleDateString()}</p>
      <hr />

      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      
      <div style={{ marginTop: "40px" }}>
        <Link to="/"> 記事一覧に戻る</Link>
      </div>
    </div>
  );
}
