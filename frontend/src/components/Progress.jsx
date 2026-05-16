// src/components/Progress.jsx
import React from 'react';
import progressBg from '../assets/progress-bg.jpg';

function Progress() {
  return (
    <div style={styles.container}>
      
      {/* Top Right: Title */}
      <div style={styles.titleContainer}>
        <h1 style={styles.title}>PROGRESS</h1>
      </div>

      {/* Center Left: The Glass Card */}
      <div style={styles.card}>
        
        {/* Section 1 */}
        <ul style={styles.list}>
          <li>• Fat loss: body fat %, weight, waist size</li>
          <li>• Muscle gain: strength increases, measurements, progress photos</li>
          <li>• Endurance: longer distance, faster time</li>
        </ul>
        
        <div style={styles.divider}></div>

        {/* Section 2 */}
        <ul style={styles.list}>
          <li>• General fitness: energy levels, consistency, recovery</li>
          <li>• Be specific. Get fitter is vague, lose 5 kg or do 10 pull-ups is measurable.</li>
        </ul>

        <div style={styles.divider}></div>

        {/* Section 3 */}
        <ul style={styles.list}>
          <li>• Body weight (weekly average, not daily swings)</li>
          <li>• Don't rely on just one number.</li>
          <li>• Track the right metrics</li>
        </ul>

        <div style={styles.divider}></div>

        {/* Section 4 */}
        <ul style={styles.list}>
          <li>• Measurements (waist, chest, arms)</li>
          <li>• Strength (weights, reps, sets)</li>
          <li>• Progress photos (every 2–4 weeks)</li>
          <li>• Performance (run time, reps, endurance)</li>
        </ul>

      </div>

    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#000000',
    backgroundImage: `url(${progressBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: '#ffffff',
    padding: '120px 8vw 60px 8vw', // Clears the navbar
    boxSizing: 'border-box',
    position: 'relative',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '20px',
  },
  title: {
    fontSize: '72px',
    fontWeight: '900',
    letterSpacing: '-1px',
    margin: 0,
    textShadow: '4px 4px 10px rgba(0,0,0,0.8)',
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark semi-transparent background
    border: '1px solid rgba(255, 255, 255, 0.2)', // Thin, faint border
    backdropFilter: 'blur(4px)', // Slight blur for that frosted glass look
    padding: '40px',
    maxWidth: '700px',
    borderRadius: '4px',
    marginTop: '20px',
  },
  list: {
    listStyleType: 'none', // We are using custom bullets in the text
    padding: 0,
    margin: 0,
    fontSize: '20px',
    lineHeight: '1.8',
    color: '#eeeeee',
    textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
  },
  divider: {
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    margin: '25px 0', // Spacing above and below the line
  }
};

export default Progress;