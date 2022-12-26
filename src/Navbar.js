import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
  let imageSrc = `https://media-exp1.licdn.com/dms/image/C5603AQHb0UWUyagQOA/profile-displayphoto-shrink_800_800/0/1643367722521?e=2147483647&v=beta&t=9uyXe9sOzOmsV5PoCSptsdgPD0evNG6PEG6wTJHccg0`
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Raghavan</span>
        <span className="d-none d-lg-block">
          <img id="page-top" 
          className="img-fluid img-profile rounded-circle mx-auto mb-2" 
        src={imageSrc} alt="..." /></span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" 
    aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span></button>

    <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to='/'>About</Link></li>

            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to='/skills'>Skills</Link></li>
            
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to='/projects'>Projects</Link></li>

            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to='/education'>Experience</Link></li>

            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to='/interests'>Interests</Link></li>

            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to='/contact'>Contact</Link></li>
        </ul>
    </div>
</nav>
  )
}
