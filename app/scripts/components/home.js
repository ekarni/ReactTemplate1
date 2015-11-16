import React from 'react';
var TimerExample = React.createClass({

    getInitialState: function(){

      return { elapsed: 0 ,startTime: Date.now()};
    },

    componentDidMount: function(){

      this.timer = setInterval(this.tick, 50);
    },

    componentWillUnmount: function(){

      clearInterval(this.timer);
    },

    tick: function(){
      this.setState({elapsed: new Date() - this.state.startTime});
    },

    resetCount: function(){
      //Resets the clock to 0
      this.setState({elapsed: 0});
      this.setState({startTime: Date.now()});

      //Shows notification of last reset


    },

    render: function() {
        
        var elapsed = Math.round(this.state.elapsed / 100);
        var seconds = (elapsed / 10).toFixed(1);    

        return <div className="hero-unit">
          <p>
            This example was started <b>{seconds} seconds</b> ago.
          </p>
        </div>
    }
});

var resetButton = React.createClass({

    resetCount: function(){
    //Resets the clock to 0
    this.setState({elapsed: 0});
    this.setState({startTime: Date.now()});

    //Shows notification of last reset
      
  },

  render: function() {

    return <div>
    <button onClick={this.resetCount}>Rest</button>
    </div>

  }
})

React.render(
    <TimerExample start={Date.now()} />,
    document.body
);