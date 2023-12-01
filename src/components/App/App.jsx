import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom/';

import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submission from '../Submission/Submission';
import Admin from '../Admin/Admin';

import './App.css';

function App() {

  return (
    <div className='App'>
      <Header />
      <Router>
        <Route path="/feeling">
          <Feeling />
        </Route>
        <Route path="/understanding">
          <Understanding />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/submission">
          <Submission />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
