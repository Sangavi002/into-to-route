import {Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Users from './pages/Users';

function App() {
  return(
    <>
      <Navbar />
      <Routes>
        <Route>
          <Route path ='/' element={<Home />} />
          <Route path ='/login' element={<Login />} />
          <Route path ='/users' element={<Users />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
