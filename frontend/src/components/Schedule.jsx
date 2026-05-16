// src/components/Schedule.jsx
import React from 'react';
import heroImg from '../assets/schedule-hero.jpg';
import bannerImg from '../assets/schedule-banner.jpg';
import cardioImg from '../assets/schedule-cardio.jpg';

function Schedule() {
  return (
    <div style={styles.container}>
      
      {/* 1. Top Section */}
      <div style={styles.topSection}>
        {/* Left Intro */}
        <div style={styles.introLeft}>
          <h1 style={styles.mainTitle}>SCHEDULE</h1>
          <p style={styles.introText}>
            Train 4 days a week with a balanced split upper, lower, push, and pull,
            allowing recovery while building full body strength.
          </p>
          <button style={styles.learnMoreBtn}>Learn More</button>
        </div>

        {/* Center Image */}
        <div style={styles.heroImageContainer}>
          <img src={heroImg} alt="Fitness Model" style={styles.heroImage} />
        </div>

        {/* Right Weekly Structure Card */}
        <div style={styles.structureCard}>
          <div style={styles.cardHeader}>WEEKLY STRUCTURE</div>
          <div style={styles.cardBody}>
            {[1, 2, 3, 4].map((day) => (
              <div key={day} style={styles.dayRow}>
                <p style={styles.dayLabel}>DAY {day}</p>
                <p style={styles.dayWorkout}>Upper body: chest, shoulders, triceps</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Middle Banner Section */}
      <div style={styles.bannerSection}>
        <div style={styles.bannerOverlay}>
          <h2 style={styles.bannerTitle}>Workout format (each session about 45–60 min)</h2>
          <div style={styles.bannerGrid}>
            <ul style={styles.bannerList}>
              <li>• 5–10 min warm-up</li>
              <li>• 3–4 exercises</li>
            </ul>
            <ul style={styles.bannerList}>
              <li>• 3 sets each (8–12 reps)</li>
              <li>• 5–10 min cool-down/stretch</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Bottom Cardio Section */}
      <div style={styles.bottomSection}>
        <div style={styles.cardioOverlay}>
          
          <div style={styles.cardioLeft}>
            <h1 style={styles.cardioMassiveTitle}>CARDIO</h1>
          </div>
          
          <div style={styles.cardioRight}>
            <ul style={styles.cardioTopList}>
              <li>• 2–3 times/week (20–30 min)</li>
              <li>• Walking, running, cycling—<br/>keep it simple</li>
            </ul>
            
            <h3 style={styles.progressRule}>Progress rule</h3>
            <p style={styles.everyWeekTitle}>Every week:</p>
            
            <ul style={styles.everyWeekList}>
              <li>• Increase weight or add reps or</li>
              <li>• Improve form recovery</li>
              <li>• Sleep: 7–9 hours</li>
              <li>• Take rest days seriously</li>
              <li>• If too sore → reduce intensity</li>
            </ul>
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
    paddingTop: '100px', 
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },
  
  /* --- Top Section Styles --- */
  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 8vw',
    marginBottom: '40px',
  },
  introLeft: {
    flex: 1,
    marginTop: '40px',
  },
  mainTitle: {
    fontSize: '64px',
    fontWeight: '800',
    marginBottom: '20px',
  },
  introText: {
    fontSize: '16px',
    lineHeight: '1.6',
    maxWidth: '300px',
    marginBottom: '30px',
    color: '#dddddd',
  },
  learnMoreBtn: {
    backgroundColor: '#ffffff',
    color: '#000000',
    border: 'none',
    padding: '12px 30px',
    fontSize: '14px',
    fontWeight: '700',
    cursor: 'pointer',
  },
  heroImageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  heroImage: {
    height: '800px',
    width: 'auto',
    objectFit: 'contain',
  },
  structureCard: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: '60px',
  },
  cardHeader: {
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '10px 20px',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '1px',
    width: 'fit-content',
  },
  cardBody: {
    border: '1px solid #333',
    padding: '30px',
    width: '320px',
  },
  dayRow: {
    borderBottom: '1px solid #333',
    paddingBottom: '15px',
    marginBottom: '15px',
  },
  dayLabel: {
    fontSize: '10px',
    color: '#888',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  dayWorkout: {
    fontSize: '14px',
  },

  /* --- Banner Section Styles --- */
  bannerSection: {
    width: '100%',
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: '40px',
  },
  bannerOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '40px 8vw',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: '28px',
    fontWeight: '400',
    flex: 1,
  },
  bannerGrid: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
  },
  bannerList: {
    listStyle: 'none',
    fontSize: '18px',
    lineHeight: '2',
  },

  /* --- Bottom Cardio Banner Styles --- */
  bottomSection: {
    width: '100%',
    minHeight: '800px', // EXTENDED height to reveal more of the runner's body
    backgroundImage: `url(${cardioImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 10%', 
  },
  cardioOverlay: {
    width: '100%',
    height: '100%',
    minHeight: '800px', // Matches the extended section height
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    padding: '0 8vw',
    boxSizing: 'border-box',
  },
  cardioLeft: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center', 
  },
  cardioMassiveTitle: {
    fontSize: '15vw', 
    fontWeight: '900',
    letterSpacing: '-2px',
    margin: 0,
    textShadow: '4px 4px 10px rgba(0,0,0,0.8)',
    lineHeight: '1',
  },
  cardioRight: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '40px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
  },
  /* --- SMALLER TEXT STYLES BELOW --- */
  cardioTopList: {
    listStyle: 'none',
    fontSize: '18px', // Scaled down
    lineHeight: '1.6',
    marginBottom: '20px',
    padding: 0,
  },
  progressRule: {
    fontSize: '24px', // Scaled down
    fontWeight: '700',
    marginBottom: '15px',
  },
  everyWeekTitle: {
    fontSize: '20px', // Scaled down
    marginBottom: '10px',
  },
  everyWeekList: {
    listStyle: 'none',
    fontSize: '16px', // Scaled down
    lineHeight: '1.6',
    padding: 0,
  }
};

export default Schedule;