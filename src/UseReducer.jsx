import { useReducer } from "react";


const emptyData = {
    name: '',
    password: '',
    email:'',
    city:'',
    address:''
}
const reducer = (data, action)=>{
return {...data,[action.type]:action.val}
}

function UseReducer(){
 const [state, dispatch]= useReducer(reducer, emptyData)
    return(
        <div>
            <h1>useReducer Hook</h1>
            <input type="text" onChange={(event)=> dispatch({val:event.target.value, type:'name'})} placeholder="enter name" />
            <br /><br />
            <input type="password" onChange={(event)=> dispatch({val:event.target.value, type:'password'})} placeholder="enter password" />
            <br /><br />
            <input type="text" onChange={(event)=> dispatch({val:event.target.value, type:'email'})} placeholder="enter email" />
            <br /><br />
            <input type="text" onChange={(event)=> dispatch({val:event.target.value, type:'city'})} placeholder="enter city" />
            <br /><br />
            <input type="text" onChange={(event)=> dispatch({val:event.target.value, type:'address'})} placeholder="enter address" />
            <br /><br />
            <button onClick={()=>console.log(state)}>Add Details</button>

            <ul>
                <li>Name:{state.name}</li>
                <li>password:{state.password}</li>
                <li>email:{state.email}</li>
                <li>city:{state.city}</li>
                <li>address:{state.address}</li>
               
            </ul>
        </div>
    )
}

export default UseReducer;