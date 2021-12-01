import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
  return <h4>This is Edward and this is my first compoment.</h4>;
}

ReactDom.render(<Greeting />, document.getElementById('root'));
