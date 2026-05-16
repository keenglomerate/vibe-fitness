// src/components/Workout.jsx
import React from 'react';
import workoutBg from '../assets/workout-bg.jpg';

function Workout() {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.contentWrapper}>
          
          {/* Bottom Left Text */}
          <div style={styles.textLeft}>
            <p style={styles.description}>
              Workouts mix strength and cardio,<br />
              using moves like squats and push-ups<br />
              for overall fitness.
            </p>
          </div>

          {/* Top Right Title */}
          <div style={styles.titleRight}>
            <h1 style={styles.title}>WORKOUT</h1>
          </div>

        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    backgroundImage: `url(${workoutBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#1a1a1a', 
  },
  overlay: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Lighter overlay so the dumbbells are visible
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    // Padding: Top (clears navbar), Right, Bottom, Left
    padding: '150px 10vw 100px 10vw', 
    boxSizing: 'border-box',
  },
  textLeft: {
    alignSelf: 'flex-end', // Pushes this block to the bottom
    maxWidth: '500px',
  },
  description: {
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '1.4',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0,0,0,0.8)', // Ensures text is readable over the image
  },
  titleRight: {
    alignSelf: 'flex-start', // Pushes this block to the top
  },
  title: {
    fontSize: '72px',
    fontWeight: '800',
    letterSpacing: '2px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
  }
};

export default Workout;