import '../styles/Projects.css'
import burgerWebsite from '../imgs/burger-website.png'
import gifSearcher from '../imgs/gif-searcher.png'
import toDoList from '../imgs/to-do-list.png'
import calculator from '../imgs/calculator.png'

function Projects(){
  return(
    <div className="projects-container">
      <a href='https://antoniovar.github.io/Gif-Search/' target='_blank' rel='noopener noreferrer'>
        <div className='img-container'>
            <img className='projects-img' src={gifSearcher} />
            <div className='txt'>
              <h3 className='word'>GIF Searcher</h3>
            </div>  
        </div>
      </a>
      
      <a href='https://antoniovar.github.io/Burger-Website/' target='_blank' rel='noopener noreferrer'>
        <div className='img-container'>
            <img className='projects-img' src={burgerWebsite} />
            <div className='txt'>
              <h3 className='word'>Burger Website</h3>
            </div>  
        </div>
      </a>

      <a href='https://antoniovar.github.io/Task-App/' target='_blank' rel='noopener noreferrer'>
        <div className='img-container'>
            <img className='projects-img' src={toDoList} />
            <div className='txt'>
              <h3 className='word'>Task App</h3>
            </div>  
        </div>
      </a>

      <a href='https://antoniovar.github.io/Calculator/' target='_blank' rel='noopener noreferrer'>
        <div className='img-container'>
            <img className='projects-img' src={calculator} />
            <div className='txt'>
              <h3 className='word'>Calculator</h3>
            </div>  
        </div>
      </a>
      
    </div>
  );
}

export default Projects;