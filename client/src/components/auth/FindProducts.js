import axios from 'axios';

import {useState, useEffect} from 'react'
import { Form } from 'react-bootstrap';

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
  
    const getBuyers = async(id)=>{
      try{
        let res = await axios.get(`/api/sellers/${id}`)
        setBuyers(res.data)
      } catch(err){
        alert('error in getting sellers')
      }
    }
  
    const getProducts = async(id)=>{
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


    return (
        <div>
            <h1>Find Products</h1>
            {sellers && renderSellerSelect()}
            {JSON.stringify(sellers)}
            {JSON.stringify(buyers)}
           {JSON.stringify(products)} 

        </div>
    )

}

export default FindProducts