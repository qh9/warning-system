import React, { Component } from 'react';
class Layouts extends Component {
  state = {}
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Layouts;