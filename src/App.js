
import './App.css';
// import Footer from './components/Common/Footer';
import HomePage from './pages/Home.js';
import DashboardPage from './pages/Dashboard.js';
import CoinPage from './pages/Coin';
import { Routes,Route } from 'react-router-dom';
import ComparePage from './pages/ComparePage';
import WatchListPage from './pages/WatchListPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/coin/:id' element={<CoinPage />}/>
      <Route path='/compare' element={<ComparePage />}/>
      <Route path='/watchlist' element={<WatchListPage />}/>
    </Routes>
    </>
  );
}

export default App;
