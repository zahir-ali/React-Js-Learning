// import { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router'
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
// import FetchData from './FetchData'
// import ApiData from './ApiData'
// import UserList from './UserList'
// import UserAdd from './UserAdd'
// import UserEdit from './UserEdit'
// import FormValidation from './FormValidation'
// import LazyLoading from './LazyLoad'
import UseReducer from './UseReducer'

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
      {/* <FetchData /> */}
            {/* <h1>Make Routes and pages for add User and User list UI</h1> */}
      {/* <ApiData /> */}
      {/* <UserList /> */}
      {/* <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/add'>Add User</NavLink>
        </li>
      </ul> */}
      {/* <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/add" element={<UserAdd/>}/>
        <Route path="/edit/:id" element={<UserEdit/>}/>
      </Routes> */}
        {/* <FormValidation /> */}
        {/* <LazyLoading /> */}
        <UseReducer />
    </div>
  )
}
export default App
