import './App.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import PostDetail from './PostDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
   
  );
}