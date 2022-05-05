
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Routes,Route,Navigate } from 'react-router-dom';

// HOC
import HomeLayoutHoc from './HOC/HomeLayoutHoc';
import WorkerLayoutHoc from './HOC/WorkerLayoutHoc';

// pages
import HomePage from './pages/HomePage'
import WorkerPage from './components/WoekrPage';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate replace to="/Home" />} />
    </Routes>
    
  <HomeLayoutHoc path="/home" exact component={HomePage}/>
  <WorkerLayoutHoc path="/workers" exact component={WorkerPage}/>
    </>
  );
}

export default App;
