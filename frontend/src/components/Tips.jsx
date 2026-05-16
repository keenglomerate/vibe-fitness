// src/components/Tips.jsx
import React from 'react';
import tipsBg from '../assets/tips-bg.jpg';

function Tips() {
  return (
    <div style={styles.container}>
      
      {/* Top Left: Main Heading */}
      <div style={styles.header}>
        <h1 style={styles.title}>TIPS</h1>
      </div>

      {/* Bottom Right: Description and Button */}
      <div style={styles.content}>
        <p style={styles.description}>
          start slowly to build consistency,
          prioritize proper form over heavy
          weights to avoid injury, and combine
          strength training with cardio
        </p>
        <button style={styles.learnMoreBtn}>Learn More</button>
      </div>

    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#000000',
    backgroundImage: `url(${tipsBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: '#ffffff',
    padding: '120px 60px 60px 60px', 
    boxSizing: 'border-box',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: '64px',
    fontWeight: '800',
    marginTop: '0',
    textShadow: '2px 2px 4px rgba(0,0,0,0.8)', 
  },
  content: {
    alignSelf: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    textAlign: 'right',
    maxWidth: '600px', // Widened to fit the larger text gracefully
  },
  description: {
    fontSize: '32px', // Bumped way up from 18px!
    lineHeight: '1.4', // Tightened line height slightly to match the larger font
    fontWeight: '500',
    marginBottom: '30px', // Added a bit more space above the button
    textShadow: '2px 2px 6px rgba(0,0,0,0.9)', // Made the shadow slightly stronger to keep the bigger text readable
  },
  learnMoreBtn: {
    backgroundColor: '#ffffff',
    color: '#000000',
    border: 'none',
    padding: '16px 32px', // Slightly larger button to balance the big text
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    borderRadius: '2px', 
  }
};

export default Tips;