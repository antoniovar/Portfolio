import '../styles/Hire.css'
import emailjs from 'emailjs-com'


function Hire(){

  const sumbitData = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_n0a2gor','template_eyxa3pv', e.target, 'FGpGYv7MBBm3opJAf')
    .then((result) => {
      alert('Message Sent')
      e.target.reset()
    }, (error) => {
      alert('Something Went Wrong');
    });
  };
 
  return(
    <div className='hire-main'>
      <i className="fa-solid fa-briefcase" />
      <h2 className='hire-title'>Contact Me</h2>
      <p className='hire-paragraph'>If you are interested about my profile please get in touch with me, will be a pleasure.</p>
      <form className='form' onSubmit={sumbitData}>
        <div className='form2'>
          <div className='labelInput'>
            <label>Name</label><input name="name" className='inputs' type='text' />
          </div>
          <div className='labelInput'>
            <label>Email</label><input name="email" className='inputs' type='email' />
          </div>
        </div>
        <label>Message</label><textarea name="message" className='inputs message' type='text' />
        <div className='button-div'>
          <button className='button' type='submit'>Submit</button>
        </div>
        
      </form>
    </div>
  );
}

export default Hire;