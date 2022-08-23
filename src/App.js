import './App.css';
import NavBar from './components/NavBar.jsx'
import Works from './components/Works.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Hire from './components/Hire.jsx'
import Certifications from './components/Certifications.jsx'

function App() {
  return (
    <div className="App">
      {/*---------------------- Navegation Bar -----------------*/}
      <NavBar 
        me='#'
        skills='#skills'
        projects='#projects' 
        certifications='#certifications'
        hire='#hire' 
      />
      {/*---------------------- Website Body -----------------*/}
      <About />
      <p id='skills' />
      <Skills />
      <p id='projects' />
      <Works />
      <p id='certifications' />
      <Certifications />
      <p id='hire' />
      <Hire />
    </div>
  );
}

export default App;
