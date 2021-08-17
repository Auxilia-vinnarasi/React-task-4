import axios from 'axios'
import React,{ useEffect } from 'react'
import { Link } from "react-router-dom"
import {useState} from 'react'

function Product() {

    const[prodList,setProdList]=useState([])
    const[isLoading,setLoading]=useState(true)

    useEffect(async() => {

      try{
        let products= await axios.get("https://60efffc2f587af00179d3c27.mockapi.io/users1");
       //console.log(products);
        // console.log(products.data);
        setProdList([...products.data])
        setLoading(false)

      }
      catch(error){
console.log(error);
setLoading(false)

      }
    }, [])

    let handleDelete=async(id)=>{
       let confirm=window.confirm("Are you sure do you want to delete?");
       if(confirm){
        try{
            await axios.delete(`https://60efffc2f587af00179d3c27.mockapi.io/users1/${id}`)
            let rowIndex=prodList.findIndex((obj)=>obj.id==id);
            prodList.splice(rowIndex,1);
            setProdList([...prodList])
            }
            catch(error)
            {
                console.log(error);
            }
       }

    }

    return (
        <>
        <h1 class="h3 mb-2 text-gray-800">Product</h1>
                    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>
                              <Link to="/product-create" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i> Create Product</Link>

       
        <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Action</th>
                           
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Action</th>
                           
                        </tr>
                    </tfoot>
                    <tbody>
                       {
                           prodList.map((product)=>{
                               return <tr>
                               <td>{product.id}</td>
                               <td>{product.productName}</td>
                               <td>{product.price}</td>
                              
                                   <td>
                                       <Link to={`/product/edit/${product.id}`}className="btn btn-sm btn-primary">Edit</Link>
                                       <button onClick={()=>{handleDelete(product.id)}} className="btn btn-sm btn-danger">Delete</button>
                                   </td>
                           </tr>
                           })

                       }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
    )
}

export default Product
