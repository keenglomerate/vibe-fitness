// src/components/Bmi.jsx
import React, { useState } from 'react';
import gaugeImg from '../assets/bmi-gauge.png'; // Make sure the space before .png is removed in your filename!
import tapeImg from '../assets/bmi-tape.png';   // Make sure the space before .png is removed in your filename!

function Bmi() {
  // State variables to hold user input and the final result
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);
  const [category, setCategory] = useState('');

  // The calculation logic
  const handleCalculate = () => {
    let h = parseFloat(height);
    const w = parseFloat(weight);

    if (h > 0 && w > 0) {
      // Smart check: If user enters height > 3, they probably entered centimeters instead of meters.
      // Let's divide by 100 to fix it for them automatically!
      if (h > 3) {
        h = h / 100;
      }

      const calculatedBmi = (w / (h * h)).toFixed(1);
      setResult(calculatedBmi);

      // Determine the category
      if (calculatedBmi < 18.5) {
        setCategory('Underweight');
      } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
        setCategory('Normal');
      } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    } else {
      alert("Please enter valid numbers for height and weight.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        
        {/* Top Section: Gauge and Categories */}
        <div style={styles.topSection}>
          <div style={styles.gaugeContainer}>
            <h1 style={styles.pageTitle}>BMI</h1>
            <img src={gaugeImg} alt="BMI Gauge" style={styles.gauge} />
          </div>
          <div style={styles.categories}>
            <p>Underweight: &lt;18.5</p>
            <p>Normal: 18.5–24.9</p>
            <p>Overweight: 25–29.9</p>
            <p>Obese: 30+</p>
          </div>
        </div>

        {/* Formula Text */}
        <p style={styles.formula}>BMI (Body Mass Index) = weight (kg) ÷ height² (m²)</p>

        {/* Bottom Section: Calculator and Tape Image */}
        <div style={styles.bottomSection}>
          <div style={styles.calcWrapper}>
            <h2 style={styles.calcTitle}>BMI Calculator</h2>
            
            {/* The White Calculator Box */}
            <div style={styles.calcBox}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>HEIGHT (m)</label>
                <input 
                  type="number" 
                  style={styles.input} 
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="e.g. 1.75"
                />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>WEIGHT (kg)</label>
                <input 
                  type="number" 
                  style={styles.input} 
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g. 70"
                />
              </div>
              <button style={styles.button} onClick={handleCalculate}>
                CALCULATE
              </button>
              
              {/* Display result if calculated */}
              {result && (
                <div style={styles.resultDisplay}>
                  <div style={styles.resultText}>Your BMI: {result}</div>
                  <div style={styles.categoryText}>({category})</div>
                </div>
              )}
            </div>
          </div>

          <div style={styles.tapeContainer}>
            <img src={tapeImg} alt="BMI Measuring Tape" style={styles.tape} />
          </div>
        </div>

        {/* Footer Note */}
        <p style={styles.note}>
          Note: BMI is just a guide it doesn't account for muscle vs fat. Use it with other measures like strength and waist size.
        </p>

      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#000000',
    paddingTop: '120px', // Clear the navbar
    display: 'flex',
    justifyContent: 'center',
    color: '#ffffff',
  },
  content: {
    width: '100%',
    maxWidth: '1000px',
    padding: '0 40px',
  },
  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
  },
  gaugeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  pageTitle: {
    fontSize: '60px',
    fontWeight: '800',
    marginBottom: '20px',
  },
  gauge: {
    height: '200px',
    width: 'auto',
  },
  categories: {
    fontSize: '28px',
    lineHeight: '1.6',
    textAlign: 'center',
  },
  formula: {
    fontSize: '24px',
    marginBottom: '60px',
  },
  bottomSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
  },
  calcWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
  },
  calcTitle: {
    fontSize: '28px',
    fontWeight: '500',
  },
  calcBox: {
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '30px',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    width: '250px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontWeight: '700',
    fontSize: '14px',
    borderBottom: '2px solid #000',
    paddingBottom: '5px',
    marginBottom: '10px',
    textAlign: 'center',
  },
  input: {
    border: 'none',
    outline: 'none',
    textAlign: 'center',
    fontSize: '18px',
  },
  button: {
    backgroundColor: '#ffffff',
    color: '#000000',
    border: '2px solid #000',
    padding: '10px',
    fontWeight: '700',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'all 0.2s',
  },
  resultDisplay: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10px',
  },
  resultText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#ff6600', 
  },
  categoryText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#000000',
  },
  tapeContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  tape: {
    height: '150px',
    width: 'auto',
  },
  note: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#aaaaaa',
    marginTop: '20px',
    paddingBottom: '40px',
  }
};

export default Bmi;