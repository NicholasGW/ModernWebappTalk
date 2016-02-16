import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import SPAHeader from './components/SPAHeader';
import Navbar from './components/NavBar';
import BindingExample from './components/Binding';
import Compliments from './components/Compliments';
import Container from './components/Container';
import Both from './components/Both';
import Insults from './components/Insults';

import $ from 'jquery';
import bootstrap from 'bootstrap';

const App = React.createClass({
  render () {
    return (<div className="container">
          <SPAHeader greeting="Welcome!"/>
          <Navbar />
      {this.props.children}
        </div>
      );
  }
});


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/props" component={Container} />
      <Route path="/state" component={BindingExample} />
      <Route path="/both" component={Both} />
      <Route path="/compliments" component={Compliments} />
      <Route path="/insults" component={Insults} />
    </Route>
  </Router>
), document.querySelector("#container"));
