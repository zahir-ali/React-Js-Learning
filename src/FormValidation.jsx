import { useState } from "react";
import './index.css'
// simple form validation
function FormValidation(){

    // const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState();


    // const [password, setPassword] = useState('');
    const [passErr, setPassErr] = useState();

    const handleName = (event)=>{
        if(event.target.value.length>5){
            setNameErr("please enter valid username, only 5 character allowed")
        }
        else(
            setNameErr()
        )
    }

    const handlePassword = (event)=>{
        const regex = /^[A-Z0-9]+$/i;
        if(regex.test(event.target.value)){
            setPassErr()
        }
        else(
            setPassErr("please enter valid password, special character is not allowed")
        )

    }


    return(
        <div>
            <h1>simple form validation</h1>
            <input type="text" className={nameErr?'error':''} placeholder="enter name" onChange={handleName}/>
            <span className="color-red">{nameErr && nameErr}</span>
            <br />
            <input type="text"  className={passErr?'error':''} onChange={handlePassword} placeholder="enter password"/>
            <span className="color-red">{passErr && passErr}</span>
            <br />
            <button disabled={nameErr || passErr}>Submit</button>
        </div>
    )
}

export default FormValidation;