import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Asteroid from './components/AsteroidRoute/Asteroid';
import About from './components/About';
import CardState from './context/envelope/CardState';
import AsteroidState from './context/envelope/AsteroidState';
import Footer from './components/Footer';
import Donki from './components/DonkiRoute/Donki';
import APODRoute from './components/apod/APODRoute';

function App() {
  const API_KEY = 'VovcfG0JJR8fgeAWu5b8KMj18cRIB0VGFOjMG2Tb';
  return (
    <>
      <CardState>
        <AsteroidState>
          <Navbar />
          <Router>
            <Routes>
              <Route path='/' element={<Home key={API_KEY} />} />
              <Route path='/apod' element={<APODRoute key={API_KEY} />} />
              <Route path='/asteroid' element={<Asteroid key={API_KEY} />} />
              <Route path='/donki' element={<Donki key={API_KEY} />} />
              <Route path='/about' element={<About key={API_KEY} />} />
            </Routes>
          </Router>
          <Footer />
        </AsteroidState>
      </CardState>
    </>
  );
}

export default App;

