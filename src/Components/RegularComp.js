import React, { Component } from 'react'

class RegularComp extends Component {
  render() {
    console.log("Reg comp Render")

    return (
      <div>I'M the regular Component {this.props.name}</div>
    )
  }
}

export default RegularComp