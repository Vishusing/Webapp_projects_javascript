import './Quickintro.css'

const Quickintro = () => {
  return (
    <div className='quickintro'>
      <p className="intro">
      <h1>Quickintro</h1>
      <br />
        <ul>
            <li>My name is Vishal Singh</li>
            <br />
            <li>Done my schooling 'Nursery to 8th' from Tender Heart's Academy</li>
            <br />
            <li>Then, I continue my studies '9th to 12th' from St. Anthony Inter College <a style={{textDecoration:'None',color:'orange'}} href="https://saicpratapgarh.org/">Collegesite</a></li>
            <br />
            <li>Currently I'am pursuing my B.tech in Computer Science & Engineering from Rajarshi Rananajay Sinh Institute of Management and Technology'RRSIMT'. <a style={{textDecoration:'None',color:'orange'}} href="https://www.rrsimt.ac.in/">Collegesite</a>Affilated to A.K.T.U <a style={{textDecoration:'None',color:'orange'}} href="https://aktu.ac.in/">Universitysite</a></li>
            <br />
        </ul>
      </p>
    
    </div>
  )
}

export default Quickintro
