import React from 'react';
import ReactDOM from 'react-dom';

// const Badge = () => {
//   return <span>Hello, world!</span>
// }

// const App = () => {
//   return (
//     <section>
//       <h1>Check out these badges!</h1>
//       <Badge color="green">Success</Badge> This is operational. <br />
//       <Badge color="red">Removed</Badge> This is critical. <br />
//       <Badge color="yellow">Warning</Badge> This is a warning. <br />
//       <Badge color="blue">Beta</Badge> This is in progress. <br />
//     </section>
//   )
// }

// const domElement = document.getElementById('root')
// ReactDOM.render(<App />, domElement)

function Button({ onKeyBoardTap, children }){
  
  return <button onClick={()=>{onKeyBoardTap()}}>{children}</button>
}

const domElement = document.getElementById('root')


ReactDOM.render(
  <div>
    <Button onKeyBoardTap={()=>console.log("hello")}>
       Add
    </Button>
    <Button onKeyBoardTap={()=>console.log("substract")}> 
      Subtract 
    </Button>
    <Button children="MULTIPLY *****" /> 
  </div>, domElement)

  // last button: this is by value
  // first and second button: by position