import './App.css';
import Signup from './components/Signup';
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/signup" element={ <Signup />} />
            <Route path="/signin" element={ <Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )};

export default App;
