
import './works.css'
import box1 from '../../assets/MS.jpeg' 
import box2 from '../../assets/Chat.jpeg' 
import box3 from '../../assets/Quizz2.jpeg' 
import box4 from '../../assets/House.jpeg' 
import box5 from '../../assets/Calci.jpeg' 
import box6 from '../../assets/portfolio-6.png' 

const Works = () => {
  return (
    <section id='works'>
    <span className='worksTitle'> My portfolio </span>
    <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses
achieve their goals and create a strong online presence.</span>
 <div className='worksImgs'>
     
     <div className='cont'>
     <a href='https://shivams107.github.io/Excel_clone/' target='_blank' rel="noreferrer">
    
         <img className='worksImg' src={box1} alt='portfolio1'/>
     </a>
     </div>
     <a href='https://github.com/SHIVAMS107/Chat_App'target='_blank' rel="noreferrer">
          <img className='worksImg' src={box2} alt='portfolio2'/>
      </a>
      <a href='https://653b778e5d48a5357f3dbee1--lighthearted-nasturtium-5c3aef.netlify.app/'target='_blank' rel="noreferrer">
         <img className='worksImg' src={box3} alt='portfolio3'/>
      </a>
      <a href='https://github.com/SHIVAMS107/E2Epro'target='_blank' rel="noreferrer">
         <img className='worksImg' src={box4} alt='portfolio4'/>
      </a>  
      <a href='https://shivams107.github.io/calc/'target='_blank' rel="noreferrer">
         <img className='worksImg' src={box5} alt='portfolio5'/>
         </a>  
         <img className='worksImg' src={box6} alt='portfolio6'/>

 </div>
 
 <a href='https://github.com/SHIVAMS107?tab=repositories' target='_blank' rel="noreferrer">
    <button className='worksBtn' >See Github</button>
    </a>

 </section>
  )
}
export default Works
