import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


export default function UserList(){

    const [userData, setUserData]= useState([]);
    const [loading, setloading]= useState(false);
    const navigate = useNavigate();
    const url = "http://localhost:3000/users";

    useEffect(()=>{
        setloading(true);
        getUserData();
    },[])

    const getUserData = async ()=>{
        let response = await fetch(url);
        response = await response.json();
        setUserData(response);
        setloading(false);
    }
    const deleteUser = async (id)=>{
        let response = await fetch(url+"/"+id,{
            method:"delete"
        })
        response = await response.json();
        if(response){
            alert("record deleted");
            getUserData();
        }
    }
    const editUser = (id) => {
        navigate("/edit/"+id)
    }
    return(
        <div>
         <ul className="user-list user-list-head">
            <li>Name</li>
            <li>Age</li>
            <li>Email</li>
            <li>Action</li>
         </ul>
                {
                    !loading?
                    userData.map((user,index)=>(
                        <ul key={index} className="user-list">
                        <li >{user.name}</li>
                        <li>{user.age}</li>
                        <li>{user.email}</li>
                        <li>
                        <button onClick={()=>deleteUser(user.id)}>Delete</button>
                        <button onClick={()=>editUser(user.id)}>Edit</button>
                        </li>
                        </ul>
                    ))
                    :<h1>Data Loading ... </h1>
                }
        </div>

    )
}