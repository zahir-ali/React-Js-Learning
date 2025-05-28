// state sy array ko kesay modify karty hai

import { useState } from "react";


function UpdateArray(){
    const [data, setData]= useState([
        'bruce', 'sam', 'peter'
    ])
    
    // array of objects
    const [dataDetails, setDataDetails] = useState([
        {name : 'sidhu', age : '20'},
        {name : 'tony', age : '30'},
        {name : 'monal', age : '40'},
    ])
    const handleUser = (name) =>{
        // console.log(name)
        data[data.length-1]= name;
        // array k last index per value change ho gaye console main 
        // console.log(data)
        // ab Ui per os change ko dekhana hai, tu es k leye hum puray array ko spread karen gy, array ke reference change ho gaye.
        setData([...data])
    }

    // function to handle array of object
    const handleAge = (age) =>{
        console.log(age);
        dataDetails[dataDetails.length-1].age = age;
        setDataDetails([...dataDetails])
    }
   
    return(
        <div>
            <h1>Update Array with State</h1>
            <input type="text" placeholder="enter name" onChange={(e)=>handleUser(e.target.value)} />
            {
                data.map((item, i)=>(
                    <li key={i}>{item}</li>
                ))
            }         

            <hr />   
            <input type="text" placeholder="enter age" onChange={(e)=>handleAge(e.target.value)}/>

            {
                dataDetails.map((item, index)=>(
                    <h3 key={index}>{item.name}, {item.age}</h3>
                ))
            }

        </div>
    )
}

export default UpdateArray;