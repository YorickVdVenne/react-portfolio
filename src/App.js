//libraries
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//styling
import './App.css';

//components
import { Header } from './components/Header'
import { Footer } from './components/Footer'

//pages
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Project } from './pages/Project'

function App() {
  return (
    <Router>
        <Header/>

      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/projects/:id" exact component={Project}/>
        </Switch>
      </div>
        <Footer />
    </Router>
  );
}

export default App;
