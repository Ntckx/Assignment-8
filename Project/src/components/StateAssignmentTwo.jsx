import React, { useState } from 'react';
let StateAssignmentTwo=()=>{
    //useState(defaultvalue)
    
    let [you,ran]=useState([]);
    let love=()=>{
        let newRandom = Math.floor(Math.random()*9);
        ran([...you,newRandom]);
    }
    return(
        <section>
            <button onClick={love}>Click me!</button>
            <div>
        {you.map((number, index) => (
          <p key={index}>{number}</p>
        ))}
      </div>
        </section>
    );
}
export default StateAssignmentTwo;