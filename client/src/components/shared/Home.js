import { useContext } from "react"
import Badge from "react-bootstrap/esm/Badge"
import { Link } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider"
import Card from "../Card"

const Home = ()=>{
    
    // let auth = useContext(AuthContext)
    // if(!auth.user){
    //     return <p>
    //         Welcome to the starter app!
    //     </p>
    // }

    return (
        <Card>
        <div>
            <h1>Welcome to Etsy!</h1>
           
           
            <Link to="/categories"><Badge style={{color: 'white'}}><h4>Categories</h4></Badge></Link>
            <br/>
            <br/>


            <Link to="/products"><Badge style={{color: 'white'}} ><h4>Products</h4></Badge></Link>
          
        </div>
        </Card>
    )
} 
export default Home