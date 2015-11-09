import React from 'react';

var resetButton = React.createClass({

  render() {
    return (
      <div className="hero-unit">
        <h1>'Allo, 'Allo!</h1>
        <p>This is a React component made by Elad.<br/>
           You now also have:</p>
        <ul>{this.state.items.map(this.renderItem)}</ul>
      </div>
    );
  }
})