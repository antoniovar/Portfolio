import Projects from './Projects.jsx'
import '../styles/Works.css'

function Works (){
  return(
    <div className='main'>
      <i className="fa-solid fa-laptop-code" />
      <h2 className='works-title'>Apps I have built</h2>
      <p className='works-paragraph'>In this section you can see some apps I have built in my learning process.
      <br />You can click on them and visit.</p>
      <Projects />
    </div>
  );
}

export default Works;
