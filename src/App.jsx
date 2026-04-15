import './App.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Articles from './components/Articles.jsx'
import PostDetail from './components/PostDetail.jsx'
import Contact from './Contacts/Contact.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
   
  );
}