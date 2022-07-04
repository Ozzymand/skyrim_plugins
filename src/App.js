import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Abbrv from './pages/Abbrv';
import AbbrvRaw from './pages/AbbrvRaw';
import Guides from './pages/Guides';
import NoPage from './pages/NoPage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="abbrv" element={<Abbrv />} />
                    <Route path="abbrvraw" element={<AbbrvRaw />} />
                    <Route path="guides" element={<Guides />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
