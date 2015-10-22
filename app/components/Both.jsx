import React, { PropTypes } from 'react'
import ColorButton from 'app/components/ColorButton'
const Both = React.createClass({

  getInitialState() {
    return {color: "white", textColor: "black"}
  },

  _onBackgroundCheck(e) {
    this.setState({color: e.target.checked ? e.target.value : "white"})
  },

  _onTextColor(e) {
    this.setState({textColor: e.target.checked ? e.target.value : "black" })
  },

  render () {
    return (
      <div className="row-fluid clearix">
    <div><input type="checkbox" value="red" name="background" onChange={this._onBackgroundCheck}/>Red Background</div>
    <div><input type="checkbox" value="white" name="text" onChange={this._onTextColor} /> White Text</div>

      <ColorButton color={this.state.color} textColor={this.state.textColor} />
      </div>
    )
  }
})

export default Both;
