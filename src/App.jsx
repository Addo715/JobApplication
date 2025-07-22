import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import UsersPage from './Pages/Userspage'
import ContactUs from './Components/ContactUs'
import NewNavbar from './Components/NewNavbar'

const App = () => {
  const location = useLocation()
  return (
    <div >
       {/* Show Navbar only on homepage and newNavbar*/}
      {location.pathname === "/" && <Navbar />}
      {location.pathname === '/userpage' && <NewNavbar/>}
    
      <Routes>
     
  <Route path='/' element={<Home />} />
  <Route path='/user' element={<UsersPage />} />
  <Route path='/contact' element={<ContactUs />} /> 
</Routes>

  
      
      <Footer/>
    </div>
  )
}

export default App