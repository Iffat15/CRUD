import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import AllUsers from './Users.jsx'
import CreateUsers from './CreateUsers'
import UpdateUsers from './UpdateUsers'
function App() {


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllUsers />}></Route>
        <Route path='/create' element={<CreateUsers />}></Route>
        <Route path='/update/:id' element={<UpdateUsers/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
