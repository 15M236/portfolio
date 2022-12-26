import React from 'react'

export default function Skills() {
    const skillStack = [
        { name: "JavaScript", link: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
        { name: "Express", link: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" },
        { name: "NodeJS", link: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
        { name: "Postman", link: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "HTML", link: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" },
        { name: "CSS", link: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" },
        { name: "Bootstrap", link: "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg" },
        { name: "Netlify", link: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
        { name: "React", link: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
        { name: "MySQl", link: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" },
        { name: "Mongo DB", link: "https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg" },
        { name: "Heroku", link: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" },
        { name: "Git", link: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
    ]
  return (
    <div>
      <section className="resume-section">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages & Tools</div>
                    <ul className="list-inline-dev-icons">
                    {skillStack.map((el, index) => (
                        <span>
                            <img alt="" src={el.link} className="w-6" width="40px" height="40px" key={index}/>
                            <h6 className="text-md ml-4">{el.name}</h6>
                        </span>
                    ))}
                    </ul>
                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            HTML, CSS, JavaScript
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            React , Axios
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            NodeJS, Express, MongoDB
                        </li>
                    </ul>
                </div>
            </section>
    </div>
  )
}
