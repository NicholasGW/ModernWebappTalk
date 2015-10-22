import React from 'react';
import ComplimentStore from 'app/stores/ComplimentStore.js';
import { dispatch } from 'app/dispatcher.js'
import { addCompliment, removeCompliment } from 'app/actions/complimentActions.js'

const Compliments = React.createClass({

  componentDidMount() {
    ComplimentStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    ComplimentStore.removeChangeListener(this._onChange);
  },

  getInitialState() {
    return {compliments: ComplimentStore.getCompliments()};
  },

  _onChange() {
    this.setState({compliments: ComplimentStore.getCompliments()});
  },

  _complimentEdit(e) {
    this.setState({text: e.target.value});
  },

  _onSubmit() {
    dispatch(addCompliment(this.state.text));
    this.setState({text: ''});
  },

  _onClick(e) {
    dispatch(removeCompliment(Number(e.target.id)));
  },

  render () {

    let compliments = this.state.compliments.map((compliment) => {

    return (
      <div className="items">
        <span id={compliment.id} className="removeItem" style={{cursor: "pointer"}} onClick={this._onClick}>X</span> {compliment.text}
      </div>
    )
  })


    return (
      <div className="row-fluid clearfix">
        <div className="col-lg-12" style={{textAlign: "center"}}>
          <form>

            <input style={{marginTop: "10px", marginBottom: "10px"}}
                   type="text"
                   value={this.state.text}
                   onChange={this._complimentEdit}>
            </input>

          <button className="btn btn-primary btn-sm"
                  type="button"
                  onClick={this._onSubmit}
                  style={{marginLeft: "10px"}}> Add Compliment </button>
          </form>

          <div style={{width: "400px", marginLeft: "auto", marginRight: "auto", marginTop: "10px"}}>

              {compliments}

          </div>
        </div>
      </div>
    );
  }
});

export default Compliments;
