// import { useState } from 'react'
import './App.css'
// import {Fragment} from 'react'
// import UseTransition from './UseTransiton'
// import DerivedState from './DerivedState'
// import LiftingState from './LiftingState'
// import UpdateObject from './UpdateObject'
// import UpdateArray from './UpdateArray'
// import UseActionHook from './UseActionHook';
// import UseIdHook from './UseidHook';
// import FragmentFun from './FragmentFun'
// import Collage from './Collage'
// import { SubjectContext } from './ContextData'
// import CustomTwo from './CustomTwo'
import FetchData from './FetchData'

function App() {
    // const [subject , setSubject] = useState(" ")

  return (
    <div style={{backgroundColor:'yellow', padding:10}}> 
      {/* <UseTransition /> */}
      {/* <DerivedState /> */}
      {/* <LiftingState /> */}
      {/* <UpdateObject /> */}
      {/* <UpdateArray /> */}
      {/* <UseActionHook /> */}
      {/* <UseIdHook /> */}
      {/* <FragmentFun /> */}

      {/* Context api code start */}
      {/* <SubjectContext.Provider value={subject}>
      <select value={subject} onChange={(e)=>setSubject(e.target.value)}>
        <option value="">Select Subject</option>
        <option value="Maths">Maths</option>
        <option value="History">History</option>
        <option value="English">English</option>
      </select>
      <h1>Context Api</h1>
      <button onClick={()=>setSubject('')}>Clear</button>
      <Collage />
      </SubjectContext.Provider> */}
      {/* Context api code End */}
      
      {/* <CustomTwo /> */}
      <FetchData />

    </div>
  )
}
export default App
