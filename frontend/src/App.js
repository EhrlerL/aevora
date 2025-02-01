import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navibar from './components/general/Navibar';
import Home from './pages/Home';
import Models from './pages/Models';
import About from './pages/About';
import Booking from './pages/Booking';
import NotFound from './pages/NotFound';
import Footer from './components/general/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navibar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/models" element={<Models />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
          <Footer />
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
