import { useContext } from "react";
import Subject from "./Subject";
import { SubjectContext } from "./ContextData";

export default function Student(){
    const subject = useContext(SubjectContext)
    
    return(
        <div style={{backgroundColor:'green', padding:10}}>
            <h1>Student Component</h1>
            <h1>Subject is : {subject}</h1>
            <Subject />
        </div>
    )
} 