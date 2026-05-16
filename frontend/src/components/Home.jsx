// src/components/Home.jsx
import React from 'react';
import heroBg from '../assets/hero-bg.jpg'; 

function Home() {
  return (
    <div style={styles.container}>
      {/* Dark gradient overlay to make text pop */}
      <div style={styles.overlay}>
        <div style={styles.content}>
          <h1 style={styles.title}>TRANSFORM YOUR BODY, FIND YOUR POWER</h1>
          <p style={styles.subtitle}>
            Stay active, build strength, and improve your health with simple workouts, expert tips, and motivation. No matter your level, start becoming your best self today.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh', // Takes up the full height of the screen
    width: '100vw',
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#111', // Fallback color if image is missing
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // 60% black overlay
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '80px', // Pushes content down so it isn't hidden under the fixed Navbar
  },
  content: {
    textAlign: 'center',
    maxWidth: '800px', // Prevents the text from stretching too wide
    padding: '0 20px',
  },
  title: {
    fontSize: '48px',
    fontWeight: '700',
    letterSpacing: '2px',
    marginBottom: '30px',
    lineHeight: '1.2',
  },
  subtitle: {
    fontSize: '18px',
    fontWeight: '300',
    lineHeight: '1.6',
    color: '#dddddd', // Slightly dimmed white for the paragraph
  }
};

export default Home;