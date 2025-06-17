// Jab aapko HTML attributes jese id banana ho (form elements ke liye), lekin aap hardcoded id use nahi karna chahte (taake ID conflict na ho ho multiple components ke sath), to aap useId use karte hain.
// label aur input ko link karta hai.

import { useId } from "react";

function UseIdHook(){
        
    // ye name hum jaha use karengy hum ko aik unique id milay gi.
    // const nameId = useId();
    // const emailId = useId();

    return(
        <div>
             <h1>useId Hook</h1>
             {/* <form action>
                <label htmlFor={nameId}>Enter Name:</label>
                <input id={nameId} type="text" placeholder="Enter your name" />
                <br /> 
                <label htmlFor={emailId}>Enter Emain:</label>
                <input id={emailId} type="email" placeholder="Enter your Email" />
                <br /> 
             </form> */}
        <Useform />
        <Useform />
        </div>
    )
}

export default UseIdHook;



function Useform(){    
    // ye name hum jaha use karengy hum ko aik unique id milay gi.
    const nameId = useId();
    const emailId = useId();
    return(
        <div>
             <h1>useId Hook</h1>
             <form action>
                <label htmlFor={nameId}>Enter Name:</label>
                <input id={nameId} type="text" placeholder="Enter your name" />
                <br /> 
                <label htmlFor={emailId}>Enter Emain:</label>
                <input id={emailId} type="email" placeholder="Enter your Email" />
                <br /> 
             </form>
        </div>
    )
}