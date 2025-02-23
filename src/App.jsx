import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Bform from './components/Bform'
import { Route, Routes } from 'react-router-dom'
import Blogs from './components/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      
      {/* <Bform/> */}
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/form" element={<Bform/>} />
        <Route path="/blog" element={<Blogs/>}/>
      </Routes>
      {/* <Blogs/> */}
    </>
  )
}

export default App
