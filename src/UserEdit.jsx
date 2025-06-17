import { useEffect , useState} from "react";
import { Navigate, useNavigate, useParams } from "react-router";

function UserEdit(){

     const {id} = useParams();
     
     const [name,setName] = useState('');
     const [age,setAge] = useState('');
     const [email,setEmail] = useState('');

     const url = "http://localhost:3000/users/"+id;
     const navigate = useNavigate();

     useEffect(()=>{
        getUserData();
     },[]);

     const getUserData = async ()=>{
        let response = await fetch(url);
        response = await response.json();
       
        setName(response.name)
        setAge(response.age)
        setEmail(response.email)
     }

    const updateUserData = async ()=>{
        let response = await fetch(url,{
             method:'Put',
             headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,age,email})
        })
        response = await response.json();
        if(response){
            alert("user updated")
            navigate('/')
        }
     }

    return(
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <h1>Eidt User Details</h1>
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="enter name" />
            <br /> 
            <input type="text" value={age} onChange={(event)=>setAge(event.target.value)}  placeholder="enter age" />
            <br /> 
            <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)}  placeholder="enter email" />
            <br />
            <button onClick={updateUserData}>Update User</button>
        </div>
    )
}

export default UserEdit;