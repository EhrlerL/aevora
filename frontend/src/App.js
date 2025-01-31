import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navibar from './components/general/Navibar';
import Home from './pages/Home';
import Showroom from './pages/Showroom';
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
          <Route path="/showroom" element={<Showroom />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
