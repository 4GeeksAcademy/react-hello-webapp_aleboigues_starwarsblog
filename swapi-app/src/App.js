import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import List from './components/List';
import Details from './components/Details';
import { StoreProvider } from './store';
import ReadLaterList from './components/ReadLaterList';

const App = () => {
  return (
    <StoreProvider>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">SWAPI</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/people">People</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vehicles">Vehicles</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/planets">Planets</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/read-later">Read Later</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/people" element={<List type="people" />} />
          <Route path="/vehicles" element={<List type="vehicles" />} />
          <Route path="/planets" element={<List type="planets" />} />
          <Route path="/people/:id" element={<Details type="people" />} />
          <Route path="/vehicles/:id" element={<Details type="vehicles" />} />
          <Route path="/planets/:id" element={<Details type="planets" />} />
          <Route path="/read-later" element={<ReadLaterList />} />
          <Route path="/" element={<h1>Welcome to SWAPI App</h1>} />
        </Routes>
      </div>
    </StoreProvider>
  );
};

export default App;
