import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../Card"

const Feed = ()=>{
const [products, setProducts] = useState([])
useEffect(()=>{

    getProducts()
},[])

const getProducts = async()=>{
    try{
    let res = await axios.get('/api/products')
    setProducts(res.data)
    console.log(res.data)
    }catch(err){
        alert('error getting products')
    }
}

    return (
        <Card>
        <div>
            <h1>Products</h1>
            <p>{JSON.stringify(getProducts)}</p>
            
           
        </div>

        </Card>
    )
} 
export default Feed