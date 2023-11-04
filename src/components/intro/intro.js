import React from 'react'
import './intro.css'
import btnImg from '../../assets/hireme.png'
import bgImg from '../../assets/image2.png'
// import { Link } from 'react-scroll'

function Intro() {
  return (
   
    <section id='intro'>
      <div className='introContent'>
    <span className='hello'>Hello,</span>
    <span className='introText'> I am <span className='introName'>Shivam</span><br/>
    <span>Web App Developer</span> </span>
   <p className='introPara'> I am skilled and passionate web designer<br/>  with experience in  creating visually appeasing websites </p>

      {/* <Link to='https://drive.google.com/file/d/10BKunI5-AOcVlhrZBRp-Jus168BWQp2d/view?usp=sharing' targ
      et="_blank"> */}
      <a href='https://drive.google.com/file/d/10BKunI5-AOcVlhrZBRp-Jus168BWQp2d/view?usp=sharing' target="_blank" rel="noreferrer">
        <button className='btn'>
    <img className='btnImg' src={btnImg} alt='' />
    Download CV
  </button>
  </a> 
{/* </Link> */}

      </div>
      
      <img  className='bg' src={bgImg} alt='profile'/>
      
    </section>
  )
}

export default Intro
