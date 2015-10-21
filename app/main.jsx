import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import SPAHeader from 'app/components/SPAHeader';
import Navbar from 'app/components/NavBar';
import BindingExample from 'app/components/Binding';
import Compliments from 'app/components/Compliments';
import bootstrap from 'bootstrap';

const App = React.createClass({
  render () {
    return (
  <div className="container">
    <SPAHeader greeting="Welcome!"/>
    <Navbar />
{this.props.children}
  </div>

  );
  }
});


ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="/state" component={BindingExample}></Route>
      <Route path="/compliments" component={Compliments}></Route>
    </Route>
  </Router>
), document.querySelector("#container"));
