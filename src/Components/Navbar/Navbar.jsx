
import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/Cartify_logo.png"
import cart_icon from "../../assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
    const [menu,setMenu]=useState("home")
    const [menuOpen, setMenuOpen] = useState(false)
    const {getTotalCartItems} = useContext(ShopContext)
    
    const handleMenuClick = (menuItem) => {
        setMenu(menuItem)
        setMenuOpen(false)
    }
    
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Cartify</p>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li onClick={()=>{handleMenuClick("home")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/">Home</Link>{menu==="home" ? <hr/>:<></>}</li>
            <li onClick={()=>{handleMenuClick("mens")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/mens">Men
            </Link>{menu==="mens" ? <hr/>:<></>}</li>
            <li onClick={()=>{handleMenuClick("womens")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/womens">Women
            </Link>{menu==="womens" ? <hr/>:<></>}</li>
            <li onClick={()=>{handleMenuClick("kids")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/kids">Kids</Link>{menu==="kids" ? <hr/>:<></>}</li>
        </ul>
        <div className="nav-right-section">
            <div className="nav-login-cart">
               <Link to="/login"> <button>Login</button></Link>
                <Link to="/cart">
                  <img src={cart_icon} alt="" />
                  {getTotalCartItems() > 0 && (
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                  )}
                </Link>
            </div>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? '✕' : '☰'}
            </button>
        </div>
    </div>
  )
}

export default Navbar
