import React, { PropTypes } from 'react';


const SPAHeader = React.createClass({

  propTypes: {
    greeting: PropTypes.string.isRequired
  },

  render () {
    return (
  <div className="row-fluid clearfix" style={{textAlign: "center"}}>
    <div className="col-lg-4"> First Column</div>
    <div className="col-lg-4"> This is my SPA Header! Greeting: {this.props.greeting} </div>
    <div className="col-lg-4"> Third Column</div>
  </div>
  );
  }
});

export default SPAHeader;
