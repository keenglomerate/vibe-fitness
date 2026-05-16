// src/components/Nutrition.jsx
import React from 'react';
import heroImg from '../assets/nutrition-hero.jpg';
import bowlsImg from '../assets/nutrition-bowls.jpg';

function Nutrition() {
  return (
    <div style={styles.container}>
      
      {/* Top Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.title}>NUTRITION</h1>
          
          <div style={styles.scrollPrompt}>
            <p style={styles.scrollText}>Key Components of Nutrition</p>
            {/* A simple CSS-drawn down arrow */}
            <div style={styles.arrowDown}>↓</div>
          </div>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div style={styles.infoSection}>
        <img src={bowlsImg} alt="Nutrient Bowls" style={styles.bowlsImage} />
        
        <div style={styles.textSplit}>
          
          {/* Micronutrients */}
          <div style={styles.textColumn}>
            <h3 style={styles.subTitle}>Micronutrients:</h3>
            <p style={styles.paragraph}>
              Vitamins and minerals required in smaller amounts to support bodily functions 
              (iron for oxygen transport, calcium for bone health).
            </p>
            <p style={styles.paragraph}>
              <strong>Water:</strong> Essential for hydration, nutrient transport, and temperature regulation.
            </p>
          </div>

          {/* Macronutrients */}
          <div style={styles.textColumn}>
            <h3 style={styles.subTitle}>Macronutrients:</h3>
            <p style={styles.paragraph}>
              Needed in large amounts to provide energy (calories):
            </p>
            <p style={styles.paragraph}>
              <strong>Carbohydrates:</strong> Main energy source.
            </p>
            <p style={styles.paragraph}>
              <strong>Proteins:</strong> Essential for building/repairing tissues.
            </p>
          </div>

        </div>
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
  },
  heroSection: {
    height: '100vh', // Takes up the full initial screen
    width: '100%',
    backgroundImage: `url(${heroImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  heroOverlay: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Slight darkening to ensure text pops
    padding: '120px 40px 40px 40px', // Top padding clears the navbar
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // Pushes title up, arrow down
  },
  title: {
    fontSize: '72px',
    fontWeight: '800',
    textAlign: 'right',
    letterSpacing: '2px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
  },
  scrollPrompt: {
    alignSelf: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  scrollText: {
    fontSize: '20px',
    fontWeight: '500',
    marginBottom: '10px',
    textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
  },
  arrowDown: {
    fontSize: '30px',
    backgroundColor: '#ffffff',
    color: '#000000',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  infoSection: {
    padding: '0',
    backgroundColor: '#111111',
  },
  bowlsImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  textSplit: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '60px 10vw',
    gap: '50px',
  },
  textColumn: {
    flex: 1,
    textAlign: 'center', // Centers text just like your draft
  },
  subTitle: {
    fontSize: '24px',
    textDecoration: 'underline',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '15px',
    color: '#dddddd',
  }
};

export default Nutrition;