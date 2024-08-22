import '../styles/Certifications.css'
import EachCertification from './EachCertification.jsx';
import p4b from '../documents/certificado_python_principiantes.pdf'
import dA from '../documents/certificado_analisis_datos_python.pdf'
import dAngular from '../documents/certificado_angular.pdf'
import DsMl from '../documents/certificado_cienciaDatos_aprendizajeAutomatico_python.pdf'
function Certifications(){
  return(
    <div className='certifications-main'>
      <i className="fa-solid fa-folder-plus"></i>
      <h2 className='certifications-title'>Certifications</h2>
      <p className='certifications-paragraph'>During my university studies I have taken some online courses that 
      have broadened my knowledge and reinforced the knowledge I already had.</p>
      <div className='certifications-group'>
        <EachCertification reference={p4b} name='Python' description='Python for beginners' company='University of Malaga' />
        <EachCertification reference={DsMl} name='DS & ML' description='Data science and machine learning in Python' company='University of Malaga' />
        <EachCertification reference={dA} name='D. Analysis' description='Data Analysis in Python' company='University of Malaga' />
        <EachCertification reference={dAngular} name='Angular' description='Level 2 angular training certification' company='Google developers' />
        <EachCertification name='Excel' description='Excel for everyone' company='University of Malaga' />
      </div>
    </div>
    );
}

export default Certifications;
