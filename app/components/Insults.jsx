import React, { PropTypes } from 'react'
import InsultStore from 'app/stores/insultStore.js';
import { dispatch } from 'app/dispatcher.js';
import { fetchInsult } from 'app/actions/insultActions.js'
const Insults = React.createClass({

  getInitialState() {
    return {insult: InsultStore.getInsult()}
  },

  componentDidMount() {
    InsultStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    InsultStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState({insult: InsultStore.getInsult()});
  },

  _onClick() {
    dispatch(fetchInsult());
  },

  render () {
    return (
      <div style={{width: "600px", marginLeft: "auto", marginRight: "auto", textAlign: "center"}}>
      <h2 style={{marginTop: "100px"}}>{this.state.insult}</h2>
        <div style={{marginTop: "10px"}}>
          <button className="btn btn-primary btn-sm"
                  onClick={this._onClick}
                  style={{display: "inline"}}>Insult yourself!
          </button>
      </div>
  </div>
    )
  }
})

export default Insults
