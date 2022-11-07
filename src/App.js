import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Frontpage from './components/Frontpage';

const Done = lazy(() => import('./components/Done'))

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Suspense fallback="Loading..">
        <Link to="/">Home</Link> | <Link to="done">Done</Link>
        <Routes>
          <Route index element={<Frontpage />} />
          <Route path="/done" element={<Done />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </div>
  );
}

export default App;
