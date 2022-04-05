import axios from 'axios';
import {useState, useEffect} from 'react'
import { Form, Table } from 'react-bootstrap';
import Card from '../Card';

const FindProducts = ()=>{

    const [sellers, setSellers] = useState([])
    const [buyers, setBuyers] = useState([])
    const [products, setProducts] = useState([])
  
    useEffect(()=>{
      getSellers()
    },[])


    const getSellers= async()=>{
      try{
        let res = await axios.get('/api/sellers')
        setSellers(res.data)
      } catch(err){
         alert('error in getting sellers')
      }
    }
  
    const getBuyers = async(e)=>{
      let id = e.target.value
      try{
        let res = await axios.get(`/api/sellers/${id}`)
        setBuyers(res.data)
      } catch(err){
        alert('error in getting sellers')
      }
    }
  
    const getProducts = async(e)=>{
      let id = e.target.value
      try{
        let res = await axios.get(`/api/buyers/${id}`)
        setProducts(res.data)
      } catch(err){
        alert('error in getting sellers')
      }
    }


    const renderSellerSelect = () => {
      return (
        <Form.Select label='Select'  onChange={getBuyers} aria-label="Select Seller">
          <option value="" disabled selected hidden>Please Choose a Seller...</option>
          {sellers.map((seller) => (
            <option value={seller.id}>{seller.name}</option>
          ))}
        </Form.Select>
      );
    };

    const renderBuyerSelect = () => {
      return (
        <Form.Select label='Select'  onChange={getProducts} aria-label="Select Buyer">
          <option value="" disabled selected hidden>Please Choose a Buyer...</option>
          {buyers.map((buyer) => (
            <option value={buyer.id}>{buyer.name}</option>
          ))}
        </Form.Select>
      );
    };
  
    const renderProducts = ()=>{
      if(!products){
        return <p>products undefined this means you haven't select a buyer</p>
      }
      if(products.length === 0){
        return <p>no products match desired category and price range for selected buyer</p>
      }  console.log(products)
      return products.map((p)=>{

        return(
          <Card key={p.id}>
          <Table  striped bordered hover >
          <thead >
            <tr>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
            
            </tr>
          </thead >
          <tbody >
          
              <tr >
                <td>{p.description}</td>
                <td>${p.price}</td>
                <td>{p.category}</td>
              </tr>
         
          </tbody>
        </Table>
        </Card>
           )
      })
    }

    return (
        <div>
            <h1>Find Products</h1>
            {sellers && renderSellerSelect()}
            {buyers && renderBuyerSelect()}
            {renderProducts()}
            {/* {JSON.stringify(sellers)}
            {JSON.stringify(buyers)}
           {JSON.stringify(products)}  */}

        </div>
    )

}

export default FindProducts