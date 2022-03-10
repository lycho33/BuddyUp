import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';

function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        {/* <Route exact path='/logout' element={<Logout />} /> */}
      </Routes>
    </div>
  );
}

export default App;
