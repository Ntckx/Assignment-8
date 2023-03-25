import React, { useState } from 'react';
function StateAssignmentOne(){
            const[love,you]=useState(0);
            
const clickButton=() => {
    you(love+1)
}
            

            return(
                <section className="StateAssignment">
                <button onClick={clickButton}>{love}</button>
                </section> 
            ); 
        
            }
            export default StateAssignmentOne;