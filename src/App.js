// import './App.css';
// import Appointment from './modules/Appointment';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './modules/Home';
import Schedule from './modules/Schedule';
import Mission from './modules/Mission';

function App() {
  return (
    <Router basename="/responsive-health">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Schedule" element={<Schedule/>} />
        <Route path="/Mission" element={<Mission/>} />
      </Routes>
    </Router>
  );
}

export default App;
