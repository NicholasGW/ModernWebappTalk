import React, { PropTypes } from 'react'

const ColorButton = React.createClass({
  render () {
    return (
      <div style={{backgroundColor: this.props.color, marginTop: "10px"}}>
       <span style={{color: this.props.textColor}}>This is some text </span>
     </div>
    )
  }
})

export default ColorButton
