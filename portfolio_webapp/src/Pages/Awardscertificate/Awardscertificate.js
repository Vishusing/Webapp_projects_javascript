import Nav from "../../Components/Navbar/Nav"
import './Awardscertificate.css'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Qualification = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <>
      <Nav />
      <div className="container">
        <h2 >Awards & Certificate</h2>
        <br />
        <br />
        <ul>
          <li >
            Hackerrank Participation Certificate in the Outline Inter College Coding Contest , held on 25 April 2021,
            organized by Department of Computer Science & Engineering, Truba Group of Institutions, Bhopal in association
            with Hackerrank.
          </li>
          <br />
          <li >
            Gold Badge in C,C++ Hackerrank
          </li>
          <br />
          <li >
            Gold Badge in Python 'Problem Solving' Hackerrank
          </li>
          <br />
          <li >
            Problem Solving 'Basic' Certificate using Python 'Passed in 2nd Attempt'
          </li>
          <br />
          <li >
            Full Stack Web development Program Demo session Participation Certificate. 'A small initiative towards web'
          </li>
          <br />
          <li >
            1st
            place in project idea pitching in topic Virtual Reality 'An emerging technology'
          </li>
          <br />
          <li >
            Power Excel, Power Digital Marketing & Power Python workshop on qr code generator 'A Participation Certificate'
          </li>
          <br />
          <li >
            Attended two week session on Enterpreneurship ideas and marketing, HR, Business Development 'A Participation Certificate'
          </li>
          <br />
          <li >
            Certificate of Completion of Fundamentals of A.I. And Machine Learning with Python
            at YBI Foundation
          </li>
          <br />
          <li >
            Certificate of Completion of Data Science Training Program at RINEX in
            association with E-cell '''IIT Bhuvneshwar'
          </li>
          <br />
          <br />
          <br />
          <div className="allprojectlinks" >
            <h1>You can visit my linkedin profile to see my achievements</h1>
            <br />
            <br />
            <a href="https://www.linkedin.com/in/vishal-singh-425978224/"><i class="fab fa-linkedin"></i></a>
          </div>
        </ul>
      </div>
    </>
  )
}

export default Qualification
