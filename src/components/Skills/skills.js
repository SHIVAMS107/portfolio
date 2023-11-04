import React from 'react'
import'./skills.css'
import uiDesign from '../../assets/ui-design.png'
import webDesign from '../../assets/website-design-2.png'
import ML from '../../assets/ML.png'

const Skills = () => {
  return (
    <section id='skills'>
       <span className='skillTitle'> What I do </span>
       <span className='skillDesc'>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly  websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, and React as well as interest in software Development.</span>
    <div className='skillBars'>
        <div className='skillBar'>
            <img className='skillBarImg' src={uiDesign} alt=''/>
            <div className='skillBarText'>
                <h2>UI Design</h2>
                <p> In UI design I love exploring complex problems in search of delightful user experience which makes user connected to me.</p>
            </div>
        </div>
        <div className='skillBar'>
            <img className='skillBarImg' src={webDesign } alt=''/>
            <div className='skillBarText'>
                <h2>Web App Design</h2>
                <p> I am passionate about solving business problem through human centerd design.curious by nature and business minded.</p>
            </div>
        </div>
        <div className='skillBar'>
            <img className='skillBarImg' src={ML} alt=''/>
            <div className='skillBarText'>
                <h2> Machine Learning</h2>
                <p> Learning ML algorithms and try to apply in day to day problem to make it easy.</p>
            </div>
        </div>
    </div>
    </section>

  )
}

export default Skills
