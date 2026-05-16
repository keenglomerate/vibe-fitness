// src/components/Review.jsx
import React from 'react';
import reviewBg from '../assets/review-bg.jpg';
import figuresImg from '../assets/review-figures.jpg';

function Review() {
  return (
    <div style={styles.container}>
      
      {/* TOP SECTION: Background Image and Text */}
      <div style={styles.topSection}>
        <h1 style={styles.title}>REVIEW</h1>
        
        <div style={styles.topTextContainer}>
          <p style={styles.topText}>
            Train regularly, eat well, recover properly, and stay consistent.
          </p>
        </div>
      </div>

      {/* BOTTOM SECTION: Black Background, Centered Content */}
      <div style={styles.bottomSection}>
        
        <p style={styles.bottomText}>
          Eat balanced, hydrate, sleep well,<br/>
          manage stress, and stay<br/>
          consistent for steady progress.
        </p>

        <img src={figuresImg} alt="Workout Figures" style={styles.figuresImage} />

        <p style={styles.tinyFooterText}>DO YOUR BEST AND FORGET THE REST</p>
        
      </div>

    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#000000',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    overflowX: 'hidden',
  },
  
  /* --- TOP SECTION --- */
  topSection: {
    height: '65vh', // Takes up the top chunk of the screen
    minHeight: '500px',
    backgroundImage: `url(${reviewBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative', // Allows us to absolutely position the text over the image
  },
  title: {
    position: 'absolute',
    top: '120px', // Clears the navbar
    left: '8vw',
    fontSize: '64px',
    fontWeight: '900',
    letterSpacing: '-1px',
    margin: 0,
    textShadow: '2px 2px 8px rgba(0,0,0,0.9)',
  },
  topTextContainer: {
    position: 'absolute',
    bottom: '20%',
    right: '8vw',
    maxWidth: '400px',
    textAlign: 'right',
  },
  topText: {
    fontSize: '26px',
    lineHeight: '1.4',
    fontWeight: '400',
    textShadow: '2px 2px 6px rgba(0,0,0,0.9)',
  },

  /* --- BOTTOM SECTION --- */
  bottomSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '80px 20px 40px 20px',
    backgroundColor: '#000000',
  },
  bottomText: {
    fontSize: '28px',
    lineHeight: '1.5',
    textAlign: 'center',
    fontWeight: '400',
    marginBottom: '80px',
    color: '#dddddd',
  },
  figuresImage: {
    width: '100%',
    maxWidth: '800px',
    height: 'auto',
    objectFit: 'contain',
    marginBottom: '40px',
  },
  tinyFooterText: {
    fontSize: '10px',
    letterSpacing: '2px',
    color: '#555555',
    textTransform: 'uppercase',
    fontWeight: '700',
  }
};

export default Review;