import React, { PropTypes } from 'react'
import ColorText from './ColorText'
const Both = React.createClass({

  getInitialState() {
    return {backgroundColor: "white", textColor: "black"}
  },

  _onBackgroundCheck(e) {
    this.setState({backgroundColor: e.target.checked ? e.target.value : "white"})
  },

  _onTextColorCheck(e) {
    this.setState({textColor: e.target.checked ? e.target.value : "black" })
  },

  render () {
    return (
      <div className="row-fluid clearix">
        <div>
          <input type="checkbox"
                 value="red"
                 name="background"
                 onChange={this._onBackgroundCheck}/>

          Red Background
        </div>
        <div>
          <input type="checkbox"
                 value="white"
                 name="text"
                 onChange={this._onTextColorCheck} />

           White Text
        </div>

          <ColorText backgroundColor={this.state.backgroundColor}
                       textColor={this.state.textColor} />
      </div>
    )
  }
})

export default Both;
