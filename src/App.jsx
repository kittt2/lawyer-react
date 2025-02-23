import { Routes, Route,Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import ScrollToTop from './components/Scroll';
import Aboutd from './pages/About-details';
import Body from './components/Body';

function App() {
  return (
    <>
   
      <Routes>
      
        <Route path="/" element={<Body />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<ServiceDetail />} />
          <Route path="about" element={<Aboutd />} />
        </Route>
      </Routes>
  
      
    </>
  );
}

export default App;