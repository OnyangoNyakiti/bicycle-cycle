import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BikeList from './pages/BikeList';
import BikeDetails from './pages/BikeDetails';
import Profile from './pages/Profile';
import BookingSummary from './pages/BookingSummary';
import Footer from './components/Footer';
import Signup from './pages/SignUp';
import Signin from './pages/SignIn';
import Payment from './pages/Payment';
import MobileMoney from "./pages/MobileMoney";

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
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />}  />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/mobile-money/:id" component={<MobileMoney />} />

        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
