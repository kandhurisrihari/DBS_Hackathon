import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Home.css'
function Home() {
  return (
    <div>
      <div className="links"><Link to='/Login/Admin'>Admin Login</Link><br /></div>
      <div className="links"><Link to='/SignUp/Admin'>Admin Signup</Link><br /></div>
      <div className="links"><Link to='/Login/Admin'>User Login</Link><br /></div>
      <div className="links"><Link to='/SignUp/Admin'>User Signup</Link><br /></div>
    </div>
  )
}

export default Home