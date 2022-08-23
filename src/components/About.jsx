import '../styles/About.css'
import myPhoto from '../imgs/me.jpeg'

function About(){
  return(
    <div className="about-container">
      <div className="about-text">
        <h1 className='about-title'>Hi, I am Antonio Vargas<br /> Fronted Developer</h1>
        <p className='about-desc'>Self-motivated and passionate about Front End UI development.
        I have skill with JavaScript, CSS, HTML and React and some knowledge about Python and machine learning.
        <br />I am from Spain, graduated in Bioinformatics Engineering at the University of Malaga and currently looking for a job as a front-end developer.</p>
      </div>
      <img className='about-photo' src={myPhoto} />
    </div>
  );
}

export default About;