// use custom Hook useToggle

import useToggle from "./CustomHook"

export default function CustomTwo(){

    const [value, toggleValue] = useToggle(true)

    return(
        <div>
            <button onClick={toggleValue}>Toggle Heading</button>
            <button onClick={()=>toggleValue(false)}>Hide Heading</button>
            <button onClick={()=>toggleValue(true)}>Show Heading</button>
            <h1>Custom Hooks in React js </h1>
            {
                value?<h2>Heading Toggle</h2>:null
            }
        </div>
    )
}