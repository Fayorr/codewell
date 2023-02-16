import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Diversify from './components/Diversify';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    // <Router>
      <div className="App">
        <Navbar />
        <Portfolio />
        <Diversify />
        <Testimonial />
        <Footer />
       
      </div>
    // </Router>
  );
}

export default App;
