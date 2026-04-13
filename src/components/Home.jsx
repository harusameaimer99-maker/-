import { useState, useEffect } from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

export default function Home() {

const [posts,setPosts]=useState([])

useEffect(()=>{
  const fetcher=async()=>{
    const res=await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
    const data=await res.json()

    setPosts(data.posts)
  }

  fetcher()
},[])

  return (
    <div>
      <h1>記事一覧</h1>
      <div className={styles['post-list']}>
        {posts.map((post) => (
          <div key={post.id} >
            <Link to={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}