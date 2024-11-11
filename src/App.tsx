import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Header from '../src/components/Header';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';
import '../src/App.css';
import ReserveTable from './pages/ReserveTable';
import Restaurant from './pages/Restaurant';

const App = () => {
  return (
      <main>
      <div className="row">
      <Header/>
      <div className="row">
      </div>
      <BrowserRouter>

      <Nav/>     

      <div className="row">
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ourrestaurant" element={<Restaurant />} />
            <Route path="/about" element={<About />} />
            <Route path="/reservetable" element={<ReserveTable />} />
          </Route>

        </Routes>
        </div>
        <div className="row">
        <Footer/>
        </div>
        </BrowserRouter>
        </div>
      </main>
  );
}

export default App;
