import { useEffect, useState } from "react";


export default function ApiData(){

    const [userData, setUserData]= useState([]);
    const [loading, setloading]= useState(false);

    useEffect(()=>{
        setloading(true);
        getUserData();
    },[])

    const getUserData = async ()=>{
        const url = "http://localhost:3000/users"
        let response = await fetch(url);
        response = await response.json();
        setUserData(response);
        setloading(false);
    }
    return(
        <div>
            <ul>
                {
                    !loading?
                    userData.map((user,index)=>(
                        <ul key={index} className="user-list">
                        <li >{user.name}</li>
                        <li>{user.age}</li>
                        <li>{user.email}</li>
                        </ul>
                    ))
                    :<h1>Data Loading ... </h1>
                }
            </ul>
        </div>

    )
}