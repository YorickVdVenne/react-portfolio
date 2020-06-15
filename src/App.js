import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from './components/Header'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

function App() {
  return (
    <Router>
        <Header/>

      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
