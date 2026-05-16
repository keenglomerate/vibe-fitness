// src/components/Recovery.jsx
import React from 'react';
import sleepBg from '../assets/recovery-sleep-bg.jpg';
import eatingImg from '../assets/recovery-eating.png';
import breathingImg from '../assets/recovery-breathing.jpg';
import meditationImg from '../assets/recovery-meditation.jpg';

function Recovery() {
  return (
    <div style={styles.container}>
      
      {/* 1. SLEEP SECTION */}
      <div style={styles.sleepSection}>
        <h1 style={styles.mainTitle}>Recovery</h1>
        <h2 style={styles.sectionTitle}>Sleep</h2>
        
        <div style={styles.sleepTextContainer}>
          <p style={styles.text}>Aim for 7–9 hours per night</p>
          <p style={styles.text}>Muscles repair and hormones reset<br/>during sleep</p>
          <p style={styles.text}>Poor sleep = slower progress, low energy</p>
        </div>
      </div>

      {/* 2. EATING SECTION */}
      <div style={styles.eatingSection}>
        <img src={eatingImg} alt="Eating Pasta" style={styles.eatingImage} />
        <div style={styles.eatingTextContainer}>
          <h2 style={styles.sectionTitleRight}>Eating (Nutrition)</h2>
          <p style={styles.text}>Protein helps muscle recovery (about 1.6–2.2 g/kg)</p>
          <p style={styles.text}>Eat enough calories for your goal (lose, maintain, gain)</p>
          <p style={styles.text}>Include carbs (energy) + healthy fats (hormones)</p>
          <p style={styles.text}>Stay hydrated</p>
        </div>
      </div>

      {/* 3. BREATHING SECTION */}
      <div style={styles.breathingSection}>
        <h2 style={styles.sectionTitleRightAligned}>Breathing</h2>
        
        {/* Step 1: Right aligned */}
        <p style={styles.breathingStep1}>Deep breathing helps reduce stress and improve recovery</p>
        
        {/* Step 2: Center aligned */}
        <p style={styles.breathingStep2}>Try slow breathing: inhale 4 sec to exhale 6 sec</p>
        
        {/* Step 3: Left aligned with image on the right */}
        <div style={styles.breathingBottomRow}>
          <p style={styles.breathingStep3}>Good for calming your body after workouts</p>
          <img src={breathingImg} alt="Dumbbells" style={styles.breathingImage} />
        </div>
      </div>

      {/* 4. MEDITATION SECTION */}
      <div style={styles.meditationSection}>
        <h2 style={styles.meditationTitle}>Meditation</h2>
        
        <div style={styles.meditationMiddle}>
          <p style={styles.meditationSideText}>5–10 minutes daily is<br/>enough</p>
          <img src={meditationImg} alt="Meditation Silhouette" style={styles.meditationImage} />
          <p style={styles.meditationSideText}>Apps like Head space or<br/>Calm can guide you</p>
        </div>

        <p style={styles.meditationBottomText}>Helps reduce stress and improve focus</p>
      </div>

    </div>
  );
}

const styles = {
  container: {
    width: '100vw',
    backgroundColor: '#000000',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    overflowX: 'hidden', 
  },
  text: {
    fontSize: '20px',
    marginBottom: '20px',
    lineHeight: '1.4',
    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
  },
  
  /* --- 1. SLEEP SECTION --- */
  sleepSection: {
    minHeight: '800px',
    backgroundImage: `url(${sleepBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    padding: '120px 8vw 60px 8vw', 
    display: 'flex',
    flexDirection: 'column',
  },
  mainTitle: {
    fontSize: '56px',
    fontWeight: '800',
    margin: '0 0 10px 40px',
    textShadow: '2px 2px 6px rgba(0,0,0,0.9)',
  },
  sectionTitle: {
    fontSize: '48px',
    fontWeight: '400',
    margin: '0 0 60px 80px',
    textShadow: '2px 2px 6px rgba(0,0,0,0.9)',
  },
  sleepTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '20px',
    marginTop: '20px',
  },

  /* --- 2. EATING SECTION --- */
  eatingSection: {
    display: 'flex',
    alignItems: 'center',
    padding: '60px 8vw',
    borderBottom: '1px solid #222', 
  },
  eatingImage: {
    width: '40%',
    maxWidth: '400px',
    objectFit: 'contain',
  },
  eatingTextContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  sectionTitleRight: {
    fontSize: '48px',
    fontWeight: '400',
    marginBottom: '40px',
  },

  /* --- 3. BREATHING SECTION --- */
  breathingSection: {
    display: 'flex',
    flexDirection: 'column',
    padding: '60px 8vw',
    borderBottom: '1px solid #222',
  },
  sectionTitleRightAligned: {
    fontSize: '48px',
    fontWeight: '400',
    alignSelf: 'flex-end', 
    marginBottom: '50px',
  },
  breathingStep1: {
    fontSize: '22px',
    alignSelf: 'flex-end', 
    marginRight: '8vw', 
    marginBottom: '60px', // Reverted to a normal margin
  },
  breathingStep2: {
    fontSize: '22px',
    alignSelf: 'center', 
    marginBottom: '0', // Removed bottom margin entirely
    zIndex: 2, // Keeps text above the image's invisible box just in case
  },
  breathingBottomRow: {
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems: 'center',
    width: '100%',
    marginTop: '-60px', // Pulls the whole bottom row upward to close the gap
  },
  breathingStep3: {
    fontSize: '22px',
    marginLeft: '4vw', 
  },
  breathingImage: {
    width: '60%', 
    maxWidth: '600px', 
    objectFit: 'contain',
  },

  /* --- 4. MEDITATION SECTION --- */
  meditationSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px 8vw 100px 8vw',
  },
  meditationTitle: {
    fontSize: '32px',
    fontWeight: '400',
    marginBottom: '40px',
  },
  meditationMiddle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1000px',
  },
  meditationImage: {
    height: '300px',
    width: 'auto',
    objectFit: 'contain',
  },
  meditationSideText: {
    fontSize: '24px',
    textAlign: 'center',
    flex: 1,
  },
  meditationBottomText: {
    fontSize: '24px',
    marginTop: '20px',
  }
};

export default Recovery;