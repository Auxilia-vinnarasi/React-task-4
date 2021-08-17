import React from 'react';
import { useFormik} from "formik";

function Myform() {
    const formik = useFormik({
        initialValues:{
            username:"ggggfff",
            age:""
        },
        validate:(values)=>{
            const errors={};
            if(!values.username){
            errors.username="Required"
            }else if(values.username.length>15){
                errors.username="Must be 15 characters"
            }

            if(!values.age){
                errors.age="Required"
            }else if(values.age<18){
                errors.age="Not allowed"
            }
            return errors;

        },
           
        
        onSubmit : (values)=>{
            console.log(values);
        }

    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label>Name</label>
                <input name="username" value={formik.values.username} onChange={formik.handleChange}/>
              {/* <span style={{color:"red"}}>Required</span>*/}
              {
                  formik.errors.username ? <span style={{color:"red"}}>{formik.errors.username}</span> :null
              }
                <br></br>
                <label>Age</label>
                <input name="age" values={formik.values.age} onChange={formik.handleChange}/>
                {
                  formik.errors.age ? <span style={{color:"red"}}>{formik.errors.age}</span> :null
              }
              <br></br>
                <button type="submit">Submit</button>
            </form>
            {/*{formik.errors.username}*/}
           {/*{JSON.stringify(formik.errors)}*/}
            
        </div>
    )
}

export default Myform
