import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import HeroGrid from './components/HeroGrid';
import Navbar from './components/Navbar';
import RoutePath from './routers/RoutePath';
import Home from './pages/Home';
import DuyuruBanner from './components/DuyuruBanner';




function App() {
  return (
    <div className="App">
      <DuyuruBanner/>
     <Navbar/>
     <RoutePath/>
     <Footer/>
    </div>
  );
}

export default App;
