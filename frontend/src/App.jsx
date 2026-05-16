// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Workout from './components/Workout';
import Nutrition from './components/Nutrition';
import Tips from './components/Tips';
import Progress from './components/Progress';
import Bmi from './components/Bmi';
import Schedule from './components/Schedule';
import Recovery from './components/Recovery';
import Review from './components/Review';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/tip" element={<Tips />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/recovery" element={<Recovery />} /> 
          <Route path="/review" element={<Review />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;