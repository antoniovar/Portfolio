import '../styles/EachCertification.css'

function EachCertification(props){
  return(
    <div className="each-main">
      <div className='part1'>
        <h1 className='each-name'>{props.name}</h1>
        <h5 className='each-description'>{props.description}</h5>
      </div>
      <h3 className='each-company'>{props.company}</h3>
      {props.reference ? 
        <a download={props.name} href={props.reference} className='download'>Download</a>
        :<a className='download notAvailable'>Not available</a>}
    </div>
  );
}

export default EachCertification;