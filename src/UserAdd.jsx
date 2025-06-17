import { useState } from "react";

function UserAdd(){

    const [name, setName]= useState('');
    const [age, setAge]= useState('');
    const [email, setEmail]= useState('');

    const createUser = async ()=>{
       const url = "http://localhost:3000/users";
        let response = await fetch(url, {
            method:'Post',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, age,email})
        });
       response = await response.json();
       console.log(response)
       if(response){
        alert("new user Added")
       }
       }
    return(
        <div style={{textAlign:'center'}}>
            <h1>Add New User</h1>
            <input type="text"  placeholder="enter name" onChange={(e)=>setName(e.target.value)}/>
            <br /> <br />
            <input type="text"  placeholder="enter age"  onChange={(e)=>setAge(e.target.value)}/>
            <br /> <br />
            <input type="email"  placeholder="enter email"  onChange={(e)=>setEmail(e.target.value)}/>
            <br /> <br />
            <button onClick={createUser}>Add User</button>
        </div>
    )
}
export default UserAdd;