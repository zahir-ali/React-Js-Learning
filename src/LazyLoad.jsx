// import User from "./User";
import { useState, lazy, Suspense} from "react";

// lazy loading
const User = lazy(()=> import ('./User'));

function LazyLoading(){

    const [load, setLoad] = useState(false)
    return(
        <div>
        <h1>Lazy Loading</h1>
        <button onClick={()=>setLoad(true)}>Load User</button>
        {
            load ? <Suspense fallback={<h2>Loading...</h2>}><User /></Suspense>  : null
        }
        {/* {
            load ? <User /> : null
        } */}
        </div>
    
    )
}

export default LazyLoading;