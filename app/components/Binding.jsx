import React from 'react';

const BindingExample = React.createClass({

  getInitialState() {
    return {text: ''};
  },

  _onTextEdit(e) {
    this.setState({text: e.target.value});
  },

  render () {
    return (
      <div>
        Type here:{' '}
        <input name="text"
               type="text"
               value={this.state.text}
               onChange={this._onTextEdit}></input>

        <div style={{marginTop: "10px", fontSize: "48px"}}>{this.state.text}</div>
      </div>
    );
  }
});

export default BindingExample;
