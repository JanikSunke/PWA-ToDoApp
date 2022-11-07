import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Frontpage from './components/Frontpage';

const ToDo = lazy(() => import('./components/ToDo'));

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Suspense fallback="Loading..">
        <Link to="/">Home</Link> | <Link to="ToDo">ToDo</Link>
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
