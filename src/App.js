import React, { PureComponent } from 'react'
import ParentComp from './Component/ParentComp'
import RefsDemo from './Component/RefsDemo'
import'./App.css'
import RefFrParent from './Component/RefFrParent.js'
import FunctionalComp from './Component/FunctionalComp'
import ClassRoomComp from './Component/ClassRoomComp'
import PortalDemo from './Component/PortalDemo'
import ClickCounter from './Component/ClickCounter'
import HoverCounter from './Component/HoverCounter'
import ClickCounterTwo from './Component/ClickCounterTwo'
import HoverCounterTwo from './Component/HoverCounterTwo'
import UserPropsRender from './Component/UserPropsRender'
import Counter from './Component/Counter'
import { UserConsumer, UserProvider } from './Component/UserComponent'
import ComponentC from './Component/ComponentC'

 class App extends PureComponent {
  render() {
    return (
      <div className="App">
      {/* <UserProvider value="Sugriv"> */}
        <ComponentC/> 
      {/* </UserProvider> */}
      {/* <Counter render={(count,incrementCount) =>{
      return <ClickCounterTwo count={count} incrementCount={incrementCount}/>
      }}/>
      <Counter render={(count,incrementCount) =>{
       return <HoverCounterTwo count={count} incrementCount={incrementCount}/>
      }}/>

        <ClickCounterTwo/>
        <HoverCounterTwo/>
        <UserPropsRender render={(isLogin)=> isLogin?"Ravi Vopara":"Sugriv"}/>
       <ClickCounter name="Sugriv"/>
       <HoverCounter/>
          <PortalDemo/>
      <ClassRoomComp/>
      <FunctionalComp/>
   <RefFrParent/>
        <RefsDemo/>
         <ParentComp />  */}
      </div>
    )
  }
}

export default App

