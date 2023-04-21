import React from "react";
import './Title.css'
import { NavLink } from 'react-router-dom'
import RandomSpace from '../RandomSpace/RandomSpace'

function Title() {
  return (
    <header className="Title" role="banner">
      <section class="desktop-header">
        <h1>SFPOPOS</h1>
        <p className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</p>
      </section>
    {/* boot strap navbar hamburger menu */}
      <nav class="navbar navbar-expand-sm navbar-styling navbar-dark" role="navigation">
        <section class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" aria-label="Icon for hamburger menu"></span>
          </button>
          <nav class="collapse navbar-collapse" id="navbarSupportedContent" role="navigation">
            <ul
              class="navbar-nav me-auto mb-2 mb-lg-0 navbar-alignment navbar-list"
            >
              <li class="nav-item">
                <NavLink
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/" role="link" aria-label="Display list of locations">List</NavLink>
              </li>
              <li class="nav-item">
                <NavLink
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/about" role="link" aria-label="Display About page">About</NavLink>
              </li>
              <li class="nav-item">
                <NavLink
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/newsletter" role="link" aria-label="Display newsletter form">Newsletter</NavLink>
              </li>
              <li class="nav-item">
                <RandomSpace role="link" aria-label="Display random location"/>
              </li>
            </ul>
          </nav>
        </section>
      </nav>
    <section class="mobile-header">
        <h1>SFPOPOS</h1>
        <p className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</p>
    </section>
  </header>
  )
}

export default Title;
