import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import SPAHeader from 'app/components/SPAHeader';
import Navbar from 'app/components/NavBar';
import BindingExample from 'app/components/Binding';
import Compliments from 'app/components/Compliments';
import Container from 'app/components/Container';
import Both from 'app/components/Both';
import Insults from 'app/components/Insults';

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
  <Router>
    <Route path="/" component={App}>
      <Route path="/props" component={Container} />
      <Route path="/state" component={BindingExample} />
      <Route path="/both" component={Both} />
      <Route path="/compliments" component={Compliments} />
      <Route path="/insults" component={Insults} />
    </Route>
  </Router>
), document.querySelector("#container"));
