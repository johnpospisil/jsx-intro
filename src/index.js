// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React Component
const App = () => {
  const buttonText = 'Click me';

  return ( 
    <div>
      {/* Below, 'for' was changed to 'htmlFor' after spotting a small error in the browser inspector console. */}
      <label className="label" htmlFor="name">Enter name:</label>
      <input id="name" type="text"/>
      <button style={{backgroundColor: 'blue', color: 'white'}}>
        {buttonText}
      </button>
    </div>
  )
}

// Take the React Component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
