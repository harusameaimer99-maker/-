import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import PostDetail from './components/PostDetail'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<PostDetail />} />
    </Routes>
  );
}