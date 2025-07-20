import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import UsersPage from './Pages/Userspage'

const App = () => {
  const location = useLocation()
  return (
    <div >
       {/* Show Navbar only on homepage and newNavbar*/}
      {location.pathname === "/" && <Navbar />}
      {/* {location.pathname === '/userpage' && <NewNavbar/>} */}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/user' element={<UsersPage/>}/>
      </Routes>
  
      
      <Footer/>
    </div>
  )
}

export default App