import React from 'react'
import { useState , useEffect , useRef} from 'react'
export default function Home() {
  const [firstName , setFirstName ] = useState("")
  const name = " Raghavan..!"
  let index = useRef(0)

  useEffect(() => {
    function tick() {
      setFirstName(firstName + name[index.current]);
      index.current++;
    }
    if(index.current < name.length){
      let char = setInterval(tick,500)
      return () => clearInterval(char)
    }
  },[firstName]) 
  
  
  return (
    <div>
      <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        {firstName}
                        {/* <span className="text-primary">{lastName}</span> */}
                    </h1>
                    <div className="subheading mb-5">
                        28/24 Thambi Kaliamman Kovil Street , 636001
                        <br/>
                        <>Check out my resume - </>
                        <a href="https://stupendous-bombolone-6d079b.netlify.app/" 
                target="_blank" rel="noreferrer">Resume</a>
                        <br/>
                        <>Click Right to send me mail</>
                        <a href="mailto:raghav8197@gmail.com"> Mail to</a>
                    </div>
                    <p className="lead mb-5"></p>
                    <div className="social-icons">
                        <a className="social-icon" href="https://www.linkedin.com/in/raghavan-paramasivam-299260136/" 
                        target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>

                        <a className="social-icon" href="https://github.com/15M236/"
                        target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>

                        <a className="social-icon" href="https://twitter.com/raghavanparama1" 
                        target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>

                        <a className="social-icon" href="https://www.quora.com/profile/Raghavan-P-5" 
                        target="_blank" rel="noreferrer"><i className="fab fa-quora"></i></a>
                    </div>
                </div>
                
            </section>
            <hr className="m-0"/>
    </div>
  )
}
