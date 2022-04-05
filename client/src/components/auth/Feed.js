import axios from "axios"
import { useEffect, useState } from "react"
import Badge from "react-bootstrap/esm/Badge"
import Card from "../Card"
import ListGroup from "react-bootstrap/esm/ListGroup"
import Table from "react-bootstrap/esm/Table"
import Container from "react-bootstrap/esm/Container"


const Feed = ()=>{
const [products, setProducts] = useState([])



const normalizeData = (rawProducts)=>{
    // grab all unique agents
    //grabbing all agent ids
    let sellers = rawProducts.map(rp => rp.seller_id)
    let uniqueIds = [... new Set(sellers)]
    let sellerProductsData = uniqueIds.map(uid=>{
        // properties that belong to agent
         
        let products = rawProducts.filter(rp=> uid == rp.seller_id)
         // get agent name from first property
         let {name, email, seller_id} = products[0]
         return {name:name , email:email, id:seller_id, products:products}
     })
    return sellerProductsData
 }
const renderRows = (products) => {
    return products.map((p) => {
      return (
        <tr key={p.id}>
          <td>${p.price}</td>
          <td>{p.description}</td>
          <td>{p.category}</td>
        </tr>
      );
    });
  };

  const renderData = () => {

    return products.map((seller) => {


      return (
          <Card key ={seller.id}>
        <ListGroup.Item     >
            <div >
            <Badge bg='dark'><h1 style={{paddingTop:'5px'}}>{seller.name}</h1></Badge>
            <br/>
            <br/>

            <Badge bg= 'info' style={{margin: '15px'}} 
                   >
             <h6 style={{marginBottom:'0px'}}>{seller.email}</h6>
           </Badge>
            <br/>

            </div>
          <Table striped bordered hover>

            <thead>

              
               


              <tr>
                  
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>{renderRows(seller.products)}</tbody>
          </Table>
        </ListGroup.Item></Card>
      );
    });
  };
useEffect(()=>{
    
    getProducts()
    // renderProducts()
},[])
//   


const getProducts = async()=>{
    try{
    let res = await axios.get('/api/products')
    setProducts(normalizeData(res.data))

    }catch(err){
        alert('error getting products')
    }
}
return (
    <Container style ={{textAlign:'center'}}>
      <Badge bg='dark' style={{margin:'20px'}}><h1 >Products by Sellers</h1></Badge>
      <ListGroup>{renderData()}</ListGroup>
    </Container>
  );
};
// const renderProducts = ()=>{
//     return products.map((p)=>{
//         return (
//             <Card key = {p.id} >
//                 <div style={{margin:'10px'}}>
//                     <Badge bg="dark"><h3>{p.description}</h3></Badge>
//                     <br/>

//                     <Badge><p>${p.price}</p></Badge>
                  

//                     <Badge bg='info'><p>{p.category}</p></Badge>
                

//                 </div>
//             </Card>
//         )
//     })
// }

//     return (
//         <Card>
//         <div>
//             <h1>Products</h1>
//             <div>
//                 {renderProducts()}
//             </div>
//             {/* <p>{JSON.stringify(products)}</p> */}

            
           
//         </div>

//         </Card>
//     )
    
// } 
export default Feed