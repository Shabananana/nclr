'use strict';

import React, {Component, PropTypes} from 'react/addons';


export default class PlayersList extends Component {
  static get propTypes() {
    return {
      title: React.PropTypes.string.isRequired
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
