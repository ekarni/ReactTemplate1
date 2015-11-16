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
      this.setState({elapsed: 0});
      this.setState({startTime: Date.now()});
    },

    render: function() {
        
        var elapsed = Math.round(this.state.elapsed / 100);
        var seconds = (elapsed / 10).toFixed(1);    

        return <div className="hero-unit">
          <p>
            This example was started <b>{seconds} seconds</b> ago.
            <button onClick={this.resetCount}>Rest</button>
          </p>
        </div>
    }
});


React.render(
    <TimerExample start={Date.now()} />,
    document.body
);