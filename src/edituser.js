import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {useContext} from 'react';
import UserContext from './usercontext';
import {useEffect} from 'react';

function EditUser(props){
    const[userName,setuserName]=useState("");
    const[position,setPosition]=useState("");
    const[office,setOffice]=useState("");
    const[age,setAge]=useState("");
    const[startDate,setstartDate]=useState("");
    const[salary,setSalary]=useState("");

    useEffect(() => {
        //console.log(props)
      //this code will execute when the component is entered inside DOM
      //we have id of the user
      //find the information by id
      //populate in form
      let userData=userContext.userList[props.match.params.id-1];
      setuserName(userData.userName)
      setPosition(userData.position)
      setOffice(userData.office)
      setAge(userData.age)
      setstartDate(userData.startDate)
      setSalary(userData.salary)
    }, [])


    const userContext=useContext(UserContext);
    const history=useHistory()
    
    let handleSubmit=(e)=>{
        //console.log(e);
       e.preventDefault();
        //console.log({userName,position,office,age,startDate,salary})
        let userData={userName,position,office,age,startDate,salary};
       // userContext.setUserList([...userContext.userList,userData])
       userContext.userList[props.match.params.id-1]=userData;
       userContext.setUserList([...userContext.userList]);
        history.push("/users")
        
    }

    return (
        <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Create User</h1>
        </div>
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                    <label>User Name</label>
                    <input type="text" value={userName} onChange={(e)=>{setuserName(e.target.value)}} className="form-control" required></input>
                    </div>
                    <div className="col-lg-6">
                    <label>Position</label>
                    <input type="text" value={position} onChange={(e)=>{setPosition(e.target.value)}}  className="form-control" required></input>
                    </div>
                    <div className="col-lg-6">
                    <label>Office</label>
                    <input type="text" value={office} onChange={(e)=>{setOffice(e.target.value)}} className="form-control" required></input>
                    </div>
                    <div className="col-lg-6">
                    <label>Age</label>
                    <input type="text"value={age} onChange={(e)=>{setAge(e.target.value)}}  className="form-control" required></input>
                    </div>
                    <div className="col-lg-6">
                    <label>Start date</label>
                    <input type="date" value={startDate} onChange={(e)=>{setstartDate(e.target.value)}}  className="form-control" required></input>
                    </div>
                    <div className="col-lg-6">
                    <label>Salary</label>
                    <input type="text" value={salary} onChange={(e)=>{setSalary(e.target.value)}}  className="form-control" required></input>
                    </div>
                    <div className="col-lg-12">
                    <input type="submit" value="update" className="btn btn-primary mt-3"/>
                    </div>
                </div>
                
            </form>
        </div>

        
    </div>
    )
}

export default EditUser