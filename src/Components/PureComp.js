import React, { Component } from 'react'

class PureComp extends Component {
  render() {
    console.log("Pure comp Render")
    return (
      <div>I'm the PureComponent {this.props.name}</div>
    )
  }
}

export default PureComp