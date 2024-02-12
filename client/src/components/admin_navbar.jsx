import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const AdminNavbar = () => {
  const activeLink = {
    'fontWeight':'bold',
    'color':'red',
    'textDecoration' : 'underline'
}
  return (
    <>
    <div>
      <header>
        <Link className="site-logo" to="/">Admin Panel</Link>
        <nav>
          <NavLink to="." style={({isActive})=>isActive?activeLink:null}>Dashboard</NavLink>
          <NavLink to="admin_upload_product" style={({isActive})=>isActive?activeLink:null}>Upload Product</NavLink>
          
          
        </nav>
      </header>
    </div>
          </>
  )
}

export default AdminNavbar
