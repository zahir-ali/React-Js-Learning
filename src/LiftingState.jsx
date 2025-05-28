// ye parent component hai, addUser aur DisplayUser ke 

import { useState } from "react";
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";


function LiftingState(){

    const [user, setUser] = useState('');

    return(
        <div>
            <AddUser addUser={setUser}/>
            <DisplayUser user={user}/>
        </div>
    )
}

export default LiftingState;