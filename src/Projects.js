import React from 'react'

export default function Projects() {
  return (
    <section className="resume-section">
      <div className="resume-section-content">
      <h2 className="mb-5">Projects</h2>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li"><i className="fas fa-check"></i></span>
            Inventory Billing Application
            <ul>
              <li>This application developes bills according to the purchase which we made</li>
              <li>Admin can add a new product or delete old product from list</li>
              <li>Generated bills will be stored in database</li>
              <li><a href="https://github.com/15M236/capstone-fsd/tree/front-end" alt="..."
              target="_blank" rel="noreferrer">Check the Front End source</a></li>
              <li><a href="https://github.com/15M236/capstone-fsd/tree/back-end" alt="..."
              target="_blank" rel="noreferrer">Check the Back End source</a></li>
              <li><a href="https://zippy-froyo-4c9c24.netlify.app/" alt="..."
              target="_blank" rel="noreferrer">Check the Front End Deployed</a></li>
              <li><a href="	https://capstone-fsd.herokuapp.com" alt="..."
              target="_blank" rel="noreferrer">Check the Back End Deployed</a></li>
            </ul>
          </li>
          <li>
            <span className="fa-li"><i className="fas fa-check"></i></span>
            CRM  App
            <ul>
              <li>This application list of Queries</li>
              <li>Authorised user can update and solve the ticket</li>
              <li>Admin and Manager can accept the user request to authorise</li>
              <li><a href="	https://github.com/15M236/CRM-FSD/tree/frontend" alt="..."
              target="_blank" rel="noreferrer">Check the Front End source</a></li>
              <li><a href="https://github.com/15M236/CRM-FSD/tree/backend" alt="..."
              target="_blank" rel="noreferrer">Check the Back End source</a></li>
              <li><a href="	https://stellar-gingersnap-715f0a.netlify.app/" alt="..."
              target="_blank" rel="noreferrer">Check the Front End Deployed</a></li>
              <li><a href="https://crm-fsd.herokuapp.com/" alt="..."
              target="_blank" rel="noreferrer">Check the Back End Deployed</a></li>
            </ul>
          </li>
        </ul>           
      </div>
    </section>
  )
}
