import React from 'react';
import { Link } from 'react-router';

const Navbar = React.createClass({
  render () {


    return (
      <div className="row-fluid clearfix nav ">
        <div className="col-lg-12" style={{textAlign: "center"}} >
          <h1> NAVIGATION  </h1>
          <ul>
            <li>
              <Link to="/props"> Props </Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/state"> State</Link>
            </li>
            <li>|</li>
            <li>
            <Link to="/both"> Both </Link>
           </li>
           <li>|</li>
            <li>
              <Link to="/compliments"> Compliments</Link>
            </li>
            <li>|</li>
            <li>
             <Link to="/insults"> Insults</Link>
           </li>
          </ul>
      </div>
    </div>
    );
  }
});

export default Navbar;
