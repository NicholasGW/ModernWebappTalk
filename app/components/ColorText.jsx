import React, { PropTypes } from 'react'

const ColorText = React.createClass({
  render () {
    return (
      <div style={{backgroundColor: this.props.backgroundColor, marginTop: "10px"}}>
       <span style={{color: this.props.textColor}}>This is some text </span>
     </div>
    )
  }
})

export default ColorText
