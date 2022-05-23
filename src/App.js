
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './components/pages/Search';
import About from './components/pages/About';
import Donate from './components/pages/Donate';
import Foster from './components/pages/Foster';
import Adopt from './components/pages/Adopt';
import Other from './components/pages/Other';
import Form from './components/pages/Form';

// am facut partea de routes in app.js , desi stiu ca puteam face si o componenta separata , dar asa imi incepusem proiectul si nu am mai avut timp sa modific .
// Nu am lasat comentarii in cod , deoarece nu am avut timp. 
// Daca va fi sa trec mai departe in procesul de recrutare si voi avea ocazia , voi explica tot ce am lucrat in proiect.
function App() { 
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search' component={Search} />
          <Route path='/about' component={About} />
          <Route path='/donate' component={Donate} />
          <Route path='/foster' component={Foster} />
          <Route path='/adopt' component={Adopt} />
          <Route path='/other' component={Other} />
          <Route path='/form' component={Form} />
        </Switch>
      </Router>
      </React.Fragment>

  );
}

export default App;
