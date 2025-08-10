import React from 'react'
import "./App.css"
import UseRef from './practiceComponents/UseRef'
import UseMemo from './practiceComponents/UseMemo'
import Use from './practiceComponents/p3/Use'
import Auth from './components/Auth'
import { NavLink, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Welcome from './components/Welcome'
export default function App() {
  return (
    <div className='bg-gray-900'>
      {/* <Home/> */}
      {/* <UseRef/>
      <UseMemo/>
      <Use/> */}
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </div>
  )
}
