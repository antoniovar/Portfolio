import '../styles/Skills.css'

function Skills(){
  return(
    <div className='skills-main'>
      <i className="fa-solid fa-microchip" />
      <h2>Skills & Technologies </h2>
      <ul className='list'>
        <div className='first-list'>
          <li className='element'><i className="fa-solid fa-circle-check"></i> HTML</li>
          <li className='element'><i className="fa-solid fa-circle-check"></i> CSS</li>
          <li className='element'><i className="fa-solid fa-circle-check"></i> JavaScript</li>
        </div>
        <div className='second-list'>
          <li className='element'><i className="fa-solid fa-circle-check"></i> React</li>
          <li className='element'><i className="fa-solid fa-circle-check"></i> Python</li>
          <li className='element'><i className="fa-solid fa-circle-check"></i> Git</li>
        </div>
      </ul>
    </div>
  );
}

export default Skills;