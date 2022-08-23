import '../styles/NavBar.css'
import curriculumVitae from '../documents/CV.pdf'

function NavBar(props){
  const url_github = 'https://github.com/antoniovar'
  const url_linkedin = 'https://www.linkedin.com/in/antonio-vargas-almodovar'
  return(
    <header className="NavBar">
      <div className='container info'>
        <a className="navBar-link" href={props.me}><h1 className="h1-navbar">Antonio Vargas |</h1></a>
        <a className="navBar-link" href={props.me}><h1 className="h1-navbar2">Antonio Vargas</h1></a>
        <div className='info-links'>
          <a className='navBar-link' href={props.skills}>Skills</a>
          <a className='navBar-link' href={props.projects}>Projects</a>
          <a className='navBar-link' href={props.certifications}>Certifications</a>
          <a className="navBar-link fab fa-github" href={url_github} target='_blank' rel='noopener noreferrer' />
          <a className='navBar-link fa-brands fa-linkedin' href={url_linkedin} target='_blank' rel='noopener noreferrer' />
        </div>
        
      </div>
      <div className='container hire'>
        <a className="navBar-link" href={props.hire}>Hire Me</a>
        <a className="navBar-link" download='Antonio_Vargas_Almodovar' href={curriculumVitae}>Download CV</a>
      </div>
    </header> 
  );
}

export default NavBar;

