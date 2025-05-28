// state k sat object ko kesay update kia jata hai.


import { useState } from "react"

function UpdateObject(){
    // lekin ab yaha per object ko state main lety hai aur ke update karty hai.

    const [data, setData] = useState({
        name : "anil",
        address:{
            city:'Dehli',
            country:'India'
        }
    })

    const handleName = (value)=>{
        data.name = value;
        // console.log(data)
        // change the reference of old object
        setData({...data})
    }
    const handleCity = (city) =>{
        data.address.city = city;
        // console.log(data)
        setData({...data, address:{...data.address, city}})
    }
    const handleCountry = (country) =>{
        data.address.country = country;
        // console.log(data)
        setData({...data, address:{...data.address, country}})
    }


    return(
        <div>
        <h1>updating object in state</h1>
        <input type="text" placeholder="Enter your name" onChange={(event)=>handleName(event.target.value)} />

        <input type="text" placeholder="Enter your city" onChange={(event)=>handleCity(event.target.value)} />

        <input type="text" placeholder="Enter your city" onChange={(event)=>handleCountry(event.target.value)} />

        <h2>Name : {data.name} </h2>
        <h2>address : {data.address.city} </h2>
        <h2>Name : {data.address.country} </h2>
        
        </div>
    )
}

export default UpdateObject;