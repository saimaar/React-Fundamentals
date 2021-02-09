import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({ children }) => {
    return <button>{children}</button>
}

const domElement = document.getElementById('root')

ReactDOM.render(
    <div>
      <Button>
        + Add
      </Button>
      <Button> 
        Subtract - 
      </Button>
      <Button children="MULTIPLY *****" /> // this is by value
    </div>, domElement)