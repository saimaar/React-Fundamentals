//Controlled Components and Refs
import React, { useState } from 'react';
import ReactDOM from 'react-dom';



const App = ()=>{ 

    const [count, setCount] = useState(0)

    let add = (evt) => {
        setCount(count + 1)
    }

    let substract = () =>{
        setCount(count - 1)  
    }


return(
    <section>
        <h2>Counter</h2>
        <div>
            <button id="add" onClick={add}>+</button>
            <input
            type = "text"
            aria-label = "count"
            value = {count}
            />
            <button onClick={substract}>-</button>
        </div>

    </section>
 )

}


ReactDOM.render(<App />, document.getElementById('root'));