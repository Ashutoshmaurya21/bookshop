import React from 'react'
import Home from './home/Home'
import Books from './components/Books'
import { Route, Routes } from "react-router-dom"
import Course from './courses/Course'
import Signup from './components/Signup'
import About from './about/About'


function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/books" element={<Course/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App