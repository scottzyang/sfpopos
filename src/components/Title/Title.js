import React from "react";
import './Title.css'
import { NavLink } from 'react-router-dom'
import RandomSpace from '../RandomSpace/RandomSpace'

function Title() {
  return (
    <div className='Title'>
        <header>
          <section class="desktop-header">
            <h1>SFPOPOS</h1>
            <div className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</div>
          </section>
        {/* boot strap navbar hamburger menu */}
          <nav class="navbar navbar-expand-sm navbar-styling navbar-dark">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul
                  class="navbar-nav me-auto mb-2 mb-lg-0 navbar-alignment navbar-list"
                >
                  <li class="nav-item">
                    <NavLink
                className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                to="/">List</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink
                className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                to="/about">About</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink
                className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } to="/newsletter">Newsletter</NavLink>
                  </li>
                  <li class="nav-item">
                    <RandomSpace />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        <section class="mobile-header">
            <h1>SFPOPOS</h1>
            <div className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</div>
        </section>
      </header>
    </div>
  )
}

export default Title;
