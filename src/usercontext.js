import React, {useState} from "react";//careting context

let UserContext = React.createContext();

export default UserContext;

//this will provide a data to all its children

export const UserProvider = ({children}) => {    //u are providing the context. and (wrappring the provider whereever u want.in app.js)
    const[userList,setUserList]=useState([])//once u set up and all other things are easy,receive the data from the context.update it so that it will be availbale to all other children.
    return <UserContext.Provider value = {{userList,setUserList}}> 
    {children} 
    </UserContext.Provider>
}