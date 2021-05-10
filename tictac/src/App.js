import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import page
import Play from './components/play';
import History from './components/history';
import Detail from './components/detail';
// End import page

// import component
import Navbar from './components/Navbar/navbar'
// End import component

const App = () => {

  return (
    <div>
      <header className="Nav">
        <Navbar />
      </header>
      
      <body>
        <Router>
          <Switch>
            <Route exact path='/' component={Play} />
            <Route exact path='/history' component={History} />
            <Route exact path='/detail' component={Detail} />
          </Switch>
        </Router>
      </body>
    </div>
  );
}

export default App;
