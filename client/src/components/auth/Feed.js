import axios from "axios"
import { useEffect, useState } from "react"
import Badge from "react-bootstrap/esm/Badge"
import Card from "../Card"
import ListGroup from "react-bootstrap/esm/ListGroup"

const Feed = ()=>{
const [products, setProducts] = useState([])
useEffect(()=>{
    
    getProducts()
    renderProducts()
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

const renderProducts = ()=>{
    return products.map((p)=>{
        return (
            <Card key = {p.id} >
                <div style={{margin:'10px'}}>
                    <Badge bg="dark"><h3>{p.description}</h3></Badge>
                    <br/>

                    <Badge><p>${p.price}</p></Badge>
                  

                    <Badge bg='info'><p>{p.category}</p></Badge>
                

                </div>
            </Card>
        )
    })
}

    return (
        <Card>
        <div>
            <h1>Products</h1>
            <div>
                {renderProducts()}
            </div>
            {/* <p>{JSON.stringify(products)}</p> */}

            
           
        </div>

        </Card>
    )
} 
export default Feed