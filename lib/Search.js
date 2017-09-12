import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="Search">
        <input type="text" placeholder="Where you be?" />

      </div>
    )
  }
}
