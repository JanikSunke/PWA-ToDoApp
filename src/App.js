import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Frontpage from './components/Frontpage';
import Navbar from './components/TopNavbar';

const ToDo = lazy(() => import('./components/ToDo'));

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Suspense fallback="Loading..">
        <Navbar />
        <Routes>
              <Route index element={<Frontpage />} />
              <Route path="/ToDo" element={<ToDo />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </div>
  );
}

export default App;
