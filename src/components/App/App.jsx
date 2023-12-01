import React from 'react';
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
        <Route exact path="/">
          <Feeling />
        </Route>
        <Route exact path="/understanding">
          <Understanding />
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
        <Route exact path="/comments">
          <Comments />
        </Route>
        <Route exact path="/review">
          <Review />
        </Route>
        <Route exact path="/submission">
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
