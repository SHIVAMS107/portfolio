import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/letter-s.png'
import contact from '../../assets/contact.png'
import { Link } from 'react-scroll'
import mobBtn from '../../assets/menu.png'


const Navbar = () => {

  const[showMenu, setShowMenu]= useState(false);

  return (
    <nav className='navbar'>
      <img className='logo' src={logo} alt='logo' />   

      <div className='desktopMenu'>
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem' onClick={()=>{setShowMenu(false)}}>Home </Link>
      <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem' onClick={()=>{setShowMenu(false)}}> About </Link>
      <Link activeClass='active' to='works'spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem' onClick={()=>{setShowMenu(false)}}>Portfolio </Link>
      <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem' onClick={()=>{setShowMenu(false)}}> Profiles </Link>
      </div>
      
     <button className='desktopMenuBtn' onClick={()=>
    {
      document.getElementById('contact').scrollIntoView({behavior:'smooth'}) ;
    }}>
     <img src={contact} className='desktopMenuImg' alt='contact'/> Contact Me </button>

     <img className='mobMenu' src={mobBtn} alt='menu'onClick={()=>{setShowMenu(!showMenu)}}/>   

<div className='navMenu' style={{display:showMenu? 'flex':'none'}}>
<Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='listItem'>Home </Link>
<Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem'> About </Link>
<Link activeClass='active' to='works'spy={true} smooth={true} offset={-50} duration={500} className='listItem'>Portfolio </Link>
<Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='listItem'>  Clients</Link>
<Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem'>  Contact</Link>
</div>

    </nav>
  )
}

export default Navbar
