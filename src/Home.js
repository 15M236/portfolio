import React from 'react'
import { useState , useEffect , useRef} from 'react'
import { Icon } from '@iconify/react';
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
                        <a href="https://drive.google.com/file/d/1F_rr41bQeZiIIX325QZ9nrID7XlPQSwN/view" 
                target="_blank" rel="noreferrer">Resume</a>
                        <br/>
                        <>Click Right to send me mail</>
                        <a href="mailto:raghavanparamasivam@gmail.com"> Mail to</a>
                    </div>
                    <p className="lead mb-5"></p>
                    <div className="social-icons">
                        <a className="social-icon" href="https://www.linkedin.com/in/raghavan-paramasivam-299260136/" 
                        target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>

                        <a className="social-icon" href="https://github.com/15M236/"
                        target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>

                        <a className="social-icon" href="https://www.hackerrank.com/raghavanparamas1"
                        target="_blank" rel="noreferrer"><Icon icon="simple-icons:hackerrank" /></a>

                        <a className="social-icon" href="https://leetcode.com/raghav8197"
                        target="_blank" rel="noreferrer"><Icon icon="simple-icons:leetcode" /></a>

                      </div>
                </div>
                
            </section>
            <hr className="m-0"/>
    </div>
  )
}
