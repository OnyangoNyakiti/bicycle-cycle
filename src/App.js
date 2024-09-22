import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BikeList from './pages/BikeList';
import BikeDetails from './pages/BikeDetails';
import Profile from './pages/Profile';
import BookingSummary from './pages/BookingSummary';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bikes" element={<BikeList />} />
          <Route path="/bikes/:id" element={<BikeDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/booking" element={<BookingSummary />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
