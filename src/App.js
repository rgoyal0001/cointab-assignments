import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Register/Register';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
    
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
