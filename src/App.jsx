import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blogs from './components/Blogs'
import Detail from './components/Detail'
import CreateBlog from './components/CreateBlog'
import Edit from './components/Edit'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Blogs/>} />
      <Route path='/createBlog' element={<CreateBlog/>} />
      <Route path='/edit/:id' element={<Edit/>} />
      <Route path='/detail/:id' element={<Detail/>} />
    </Routes>
  )
}

export default App