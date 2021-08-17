import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from "react"
import {useHistory} from "react-router-dom"

function ProductEdit(props) {

    const [productName, setproductName] = useState("");
    const [price, setPrice] = useState("");
    const [isLoading, setLoading] = useState(false);
    let history=useHistory();


    //get the data from DB using id
    //populate in form 
    //update in db
    useEffect(async () => {
        try {
        let product=await axios.get(`https://60efffc2f587af00179d3c27.mockapi.io/users1/${props.match.params.id}`)
        //console.log(product)
        setproductName(product.data.productName);
        setPrice(product.data.price);

        }
        catch (error) {
            console.log(error);
        }
    }, [])

    let handleSubmit = async(e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await axios.put(`https://60efffc2f587af00179d3c27.mockapi.io/users1/${props.match.params.id}`, { productName, price })
            setLoading(false); 
            history.push("/product")
        }
        catch(error){
            console.log(error);
        }
       
    }

    return (
        <div>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Edit Product</h1>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <label>Product Name</label>
                            <input type="text" value={productName} onChange={(e) => { setproductName(e.target.value) }} className="form-control" required></input>
                        </div>
                        <div className="col-lg-6">
                            <label>Price</label>
                            <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} className="form-control" required></input>
                        </div>
                        <div className="col-lg-12">
                            <input type="submit" value="Update" className="btn btn-primary mt-3" disabled={isLoading}/>
                        </div>
                    </div>

                </form>
            </div>


        </div>
    )
}

export default ProductEdit
