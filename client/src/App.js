
import './App.css';
import HomeLayoutHoc from './HOC/HomeLayoutHoc';
import { Routes,Route,Navigate } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate replace to="/Home" />} />
    </Routes>
    
  <HomeLayoutHoc path="/home" exact component={HomePage}/>
    </>
  );
}

export default App;
