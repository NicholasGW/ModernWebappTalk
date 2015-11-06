import React from 'react'

const Text = React.createClass({
  render () {
    return (
      <div>{this.props.message}</div>
    )
  }
})

export default Text
