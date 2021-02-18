//Controlled Components and Refs
import React, { useState } from 'react';
import ReactDOM from 'react-dom';



const App = ()=>{ 

    const [count, setCount] = useState(0)


return(
    <section>
        <h2>Counter</h2>
        <div>
            <button>+</button>
            <input
            type = "text"
            aria-label = "count"
            defaultValue = {count}
            />
            <button>-</button>
        </div>

    </section>
 )

}


ReactDOM.render(<App />, document.getElementById('root'));