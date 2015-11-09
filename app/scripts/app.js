import React from 'react';
import Home from './components/home';
import ResetButton from './components/resetButton';

window.React = React;
const mountNode = document.getElementById('app');

React.render(<Home/>, mountNode);
