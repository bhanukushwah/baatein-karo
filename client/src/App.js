import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join'

import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/join" exact component={Join} />
      <Route path="/chat" exact component={Chat} />
    </Router>
  );
}

export default App;
