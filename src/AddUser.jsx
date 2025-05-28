// ye lifting state up ka example hai. es component sy hum display user main data ko transfer karna chahty hai.


function AddUser({addUser}){


    return(
        <div>
            <h4>Add user</h4>
            <input type="text" placeholder="Enter user name" onChange={(e)=>addUser(e.target.value)}/>
            <hr />

        </div>
    )
}

export default AddUser;