import { useEffect, useState } from "react";
import './App.css'
export default function FetchData(){
    const[usersData, setUsersData] = useState([])
    useEffect(()=>{
        getUsersData();
    }, []);

    async function getUsersData(){
            const URL = "https://jsonplaceholder.typicode.com/users";
            let response = await fetch(URL);
            response = await response.json();
            setUsersData(response);
    }
    console.log(usersData)
    return(
        <div>
            <h1>Fetch Data from Api</h1>
             <ul className="user-list user-list-head">
                        <li>Id</li>
                        <li>Name</li>
                        <li>Email</li>
                    </ul>
            {
                usersData && usersData.map((user)=>(
                    <ul className="user-list">
                        <li>Id:{user.id}</li>
                        <li>Name:{user.name}</li>
                        <li>Email:{user.email}</li>
                    </ul>
                ))
            }
        </div>
    )
}