// jab aik variable state ke value ya state ke calculation ko rakhty hai, tu usko derived state kehty hai. eski waja sy application ke performance increase hoti hai.

import { useState } from "react"


function DerivedState(){
    
    const[users, setUsers] = useState([]);
    const[user, setUser] = useState('');

    const handleAddUser = () =>{
        setUsers([...users, user])
    }
    // yaha per variable state ke value ko save karta hai.
    const total = users.length;
    const last = users[users.length-1];
    // users array sy duplicate values ko remove kiya javascript k built-in object Set sy. Aur phr (spread operator) ... sy us object ko array main convert kiya.
    const unique = [...new Set(users)].length;

  return(
        <div>
        <h2>total users : {total}</h2>
        <h2>Last user : {last}</h2>
        <h2>unique user : {unique}</h2>
        <input type="text" placeholder="enter your name"  onChange={(event)=>setUser(event.target.value)}           />
        <button onClick={handleAddUser} >add user</button>
        {
            users.map((item, index)=>(
                <h4 key={index}>{item}</h4>
            ))
        }

        </div>
  )
}

export default DerivedState;