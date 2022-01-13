import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {HomePage} from './pages/HomePage';
import {DriftPage} from './pages/DriftPage';
import {TimeAttackPage} from './pages/TimeAttackPage';
import {ForzaPage} from './pages/ForzaPage';
import {Menu} from './components/Menu';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;