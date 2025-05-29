// es hook sy hum form asani sy handle karty hai.

import { useActionState } from "react";


function UseActionHook(){

    const saveData = async (previosSate, formData)=>{
        const name = formData.get("name");
        const password = formData.get("password");   
        await new Promise((res)=>{
            return setTimeout(()=>{
                res()
            }, 2000)
        })
        if(name && password){
            return {message:"Data Submitted"}
        }
        else{
            return {error:'Failed to Submit, Enter proper data'}
        }
    }
    
    const [data,formAction,pending] = useActionState(saveData , {message: ''})

    console.log(data)
    return(
        <div>
            <h1>useActionState Hook in React Js</h1>
            <form action={formAction}>
                <input type="text" placeholder="enter name" name="name" />
                <br /> <br />
                <input type="password" placeholder="enter password" name="password" />
                <br /> <br />
                <button disabled={pending}>Submit</button>
                
                {/* agar data.message= "hello" ya aur kuch or hoga message main tu <h2>hello</h2> return render ho ga. lekin agar data.message undefined ya empty ho ga tab b <h2></h2> render ho ga. */}
                {/* <h2>{data.message}</h2> */}

                {/* 
                agar data.message="hello" agar message main koi value hogi tab ye span render hogi. lekin agar data.message undefined ya " " (empty string) hogi tu na span tag render hogi aur na empty space. */}
                {
                    data?.message && <span>{data?.message}</span>
                }

                {/* same agar data.error undefined ya empty string ho tu kuch nahi dekhana na span na space. aur agar data.error exist karta hai tab error message show kar do. */}
                {
                    data?.error && <span>{data?.error}</span>
                }

            </form>
        </div>
    )

}
export default UseActionHook;