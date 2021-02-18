//Controlled Components and Refs
import React, { useState } from 'react';
import ReactDOM from 'react-dom';



const App = ()=>{ 

    const [count, setCount] = useState(0)
    const [randomColor, setRandomColor] = useState(100)

    let add = (evt) => {
        setCount(count + 1)
    }

    let substract = () =>{
        setCount(count - 1)  
    }
return(
    <section>
        <h2 style={{ color:`hsl(${randomColor}, 100%, 50%)`}}>Counter</h2>
        <div>
            <button id="add" onClick={add}>+</button>
            <input
            type = "number"
            aria-label = "count"
            value = {count}
            onChange={(event)=>{
                setCount(parseInt(event.target.value))
                setRandomColor(count * 10)
            }}
            />
            <button onClick={substract}>-</button>
        </div>

    </section>
 )

}


ReactDOM.render(<App />, document.getElementById('root'));