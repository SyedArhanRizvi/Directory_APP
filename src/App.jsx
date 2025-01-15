import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Components/Home';
import FindUser from './Components/FindUser';
function App() {
  const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path="/find-user" element={<FindUser users={savedUsers} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
