// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav style={styles.nav}>
      
      {/* 1. Left Side (Logo) */}
      <div style={styles.sideColumn}>
        <Link to="/">
          <img src={logo} alt="Vibe Fitness Logo" style={styles.logo} />
        </Link>
      </div>

      {/* 2. Middle Side (All Fully Functional Links!) */}
      <ul style={styles.navLinks}>
        <Link to="/" style={styles.link}>HOME</Link>
        <Link to="/workout" style={styles.link}>WORKOUT</Link>
        <Link to="/nutrition" style={styles.link}>NUTRITION</Link> 
        <Link to="/tip" style={styles.link}>TIP</Link>
        <Link to="/progress" style={styles.link}>PROGRESS</Link>
        <Link to="/bmi" style={styles.link}>BMI</Link>
        <Link to="/schedule" style={styles.link}>SCHEDULE</Link>
        <Link to="/recovery" style={styles.link}>RECOVERY</Link>
        <Link to="/review" style={styles.link}>REVIEW</Link>
      </ul>

      {/* 3. Right Side (Empty spacer to keep things balanced) */}
      <div style={styles.sideColumn}></div>

    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 40px',
    backgroundColor: 'transparent', 
    width: '100%',
    position: 'fixed',
    top: 0,
    zIndex: 1000,
    boxSizing: 'border-box',
  },
  sideColumn: {
    flex: 1, 
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '120px', 
    width: 'auto',
    cursor: 'pointer',
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    gap: '30px', 
    fontSize: '14px',
    fontWeight: '500',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    margin: 0, 
    padding: 0,
  },
  link: {
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    textShadow: '1px 1px 3px rgba(0,0,0,0.8)', 
    color: 'inherit', 
    textDecoration: 'none', 
  }
};

export default Navbar;