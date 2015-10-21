import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';


const App = React.createClass({
  render () {
    return (
  <div>
    This is my SPA Header
{this.props.children}
  </div>


  );
  }
});


ReactDOM.render((
  <Router>
    <Route path="/" component={App}></Route>
  </Router>
), document.body);
