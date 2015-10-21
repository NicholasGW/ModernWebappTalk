import React from 'react';
import { Link } from 'react-router';

const Navbar = React.createClass({
  render () {

    let liStyle = {display: "inline", marginLeft: "20px"};



    return (
      <div className="row-fluid clearfix">
        <div className="col-lg-12" style={{textAlign: "center"}} >
          <h1> NAVIGATION </h1>
          <ul>
            <li style={liStyle}>
              <Link to="/state"> Binding</Link>
            </li>
            <li style={liStyle}>|</li>
            <li style={liStyle}>
              <Link to="/compliments"> Compliments</Link>
            </li>
          </ul>
      </div>
    </div>
    );
  }
});

export default Navbar;
