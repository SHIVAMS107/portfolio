import './contact.css'
import emailjs from '@emailjs/browser';
import GFG from '../../assets/GFG.png'
import Leetcode from '../../assets/Leetcode.jpg'
import Codechef from '../../assets/codechef.png'
 import Interviewbit from'../../assets/interviewbit.jpg'
import FacebokIcon from '../../assets/facebook-icon.png'
import InstagramIcon from '../../assets/instagram.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import { useRef } from 'react';

function Contact() {
    const form =useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4fvetc8', 'template_cyh9ozs', form.current, 'sGvXL48hknMIvj65l')
          .then((result) => {
              console.log(result.text);
              alert('Email Sent')
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
   <section id='contactPage'>

    <div id='clients'>
        <h1 className='contactPageTitle'> Profiles</h1>
        <p className='clientDesc'>
            I had practice coding on the renowned coding platforms.
           I have got 1665 max rating on Leetcode and 2* on Codechef.
        </p>
        <div className='clientImgs'>
            <div> 
                <a href='https://auth.geeksforgeeks.org/user/shivamsingh91036a/' target='_blank' rel='noreferrer'> 
                   <img src={GFG} alt='clients' className='clientImg'/>
                  </a> 
            </div> 
            
            <div>
             <a href='https://leetcode.com/shivamsingh_123/' target='_blank' rel='noreferrer'> 
            <img src={Leetcode} alt='clients' className='clientImg'/>
            </a> 
            </div>

            <div>
             <a href='https://www.codechef.com/users/shivamsit2024' target='_blank' rel='noreferrer'> 
            <img src={Codechef } alt='clients' className='clientImg'/>
             </a> 
             </div>

            <div>
              <a href='https://www.interviewbit.com/profile/shivam-singh_921' target='_blank' rel='noreferrer'> 
                <img src={Interviewbit} alt='clients' className='clientImg'/> 
              </a> 
            </div>
        </div>
        </div>
    <div id='contact'>
<h1 className="contactPageTitle">
    Contact me
</h1>
<p className='contactDesc'>
    please fill out the below form for any work opportunity
</p>
<form className='contactForm' ref={form} onSubmit={sendEmail}>
    <input type='text' className='name' placeholder='enter name' name='your_name'/>
    <input type='email' className='email' placeholder='enter email' name='your_email'/>

    <textarea className='message' rows="6" placeholder='enter message' name='message' >
    </textarea>
    <button type='submit' value='Send' className='submitBtn'>Submit </button>
    <div className="links">
        <a href='https://www.facebook.com/profile.php?id=100040601190442'> <img className='link' src={FacebokIcon} alt='Facebook' /> </a>
        <a href='https://www.instagram.com/shivamsingh91036/'><img className='link' src={InstagramIcon} alt='Instagram'/></a>
        <a href='https://twitter.com/home'><img className='link' src={TwitterIcon} alt='Twitter'/></a>
        
        <img className='link' src={YoutubeIcon} alt=''/>
    </div>

</form>


    </div>
   </section>
  )
}

export default Contact
