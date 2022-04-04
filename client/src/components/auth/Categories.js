import axios from "axios"
import { useEffect, useState } from "react"
import Badge from "react-bootstrap/esm/Badge"
import useAxios from 'axios-hooks'
import { Form, Table } from "react-bootstrap";
import Card from "../Card";

const Categories = ()=>{

    const[{data: products, loading, error}] = useAxios('/api/products')
    
    const [filteredCategories, setFilteredCategories] = useState([])
    
    if(error) return <p>Error</p>
    if(loading) return <p>Loading</p>


    const getUniqueCategories = ()=>{ 
        // this reduce is return the accumulator
        // the 'd' is the start of the next value 
        return products.reduce((accum, d) =>{
            
            if(!accum.includes(d.category)){

                accum.push(d.category)

            }
            return accum
        },[])
    }



    // useEffect(()=>{
    //     getCategories()
    // },[])

    const handleSelect = (event) => {
        let selectedCategory = event.target.value;
        // filter
        setFilteredCategories(products.filter((p) => p.category === selectedCategory));
      };

    const renderSelect = (categories) => {
        return (
          <Form.Select label='Select'  onChange={handleSelect} aria-label="Select Category" >
            <option value="" disabled hidden> Please Choose A Category... </option>
            {categories.map((category) => (
              <option   value={category} key={category.id}>{category}</option>
            ))}
          </Form.Select>
        );
      };

      const getSelect = () => {
        //1. getting all unique cities
        let uniqueCategories = getUniqueCategories();
        //2. how do we hook this up to bootstrap component
        return renderSelect(uniqueCategories);
        //3. how do we handle the click event on select..
      };

      const renderFilteredCategoryProducts = () => {
        if (!filteredCategories) {
          return <p> No products, or select a category </p>;
        }
    
        return (

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
              
              </tr>
            </thead>
            <tbody>
              {filteredCategories.map((c) => (
                <tr key={c.id}>
                  <td>{c.description}</td>
                  <td>${c.price}</td>
                  <td>{c.category}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        );
      };
    
      return (
          <Card>
        <div>
  <Badge bg='dark' style={{margin:'10px'}}><h1>Categories</h1></Badge>     


          {getSelect()}
          {renderFilteredCategoryProducts()}
        </div>
        </Card>
      );
    };

    

    // const getCategories = async()=>{
    //     let res = await axios.get
    //     setFilteredCategories(res.data)
    // }






//     return(
//         <div style={{textAlign:'center'}}>
//             <Badge bg='dark' style={{margin:'10px'}}><h1>Categories</h1></Badge>

//             {JSON.stringify(uniqueCategories)}


//         </div>
//     )
// }

export default Categories