
import Badge from "react-bootstrap/esm/Badge";
import { Link, Outlet } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "react-bootstrap/esm/Button";
import Card from "../Card";



const NavBar = ()=>{
    // if (user)=>  logout 
    // if (!user)=>  login/register 

    const auth = useContext(AuthContext)
    const renderRightNav = ()=>{

        if(auth.user){
          return  (
            <>


            {/* <Badge style={{color: 'white'}} >Feed</Badge> */}
            <Badge><Link to ='/feed' style={{color: 'white'}}> Products </Link></Badge>
            <br/>
           

              </>  
              )
           }
          return (
            <>
            {/* <Badge style={{color: 'white'}} href="/login">Login</Badge> */}
            <Badge><Link to ='/login' style={{color: 'white'}}> Login </Link></Badge>







          
                        
             </>

          )
    }
    const renderCenterNav = ()=>{

      if(auth.user){
        return  (
          <>
    <Badge><Link to ='/categories' style={{color: 'white'}}> Categories </Link></Badge>
  
  
  
  
  
  
  
            </>  
            )
         }
        return (
          <>
  
  
          <div>

          </div>
  
          {/* <Badge style={{color: 'white'}} href="/register">Register</Badge> */}
          {/* <Badge><Link to ='/register' style={{color: 'white'}}>Register </Link></Badge> */}
  
  
        
                      
           </>
  
        )
  }
  const renderCenterNav2 = ()=>{

    if(auth.user){
      return  (
        <>

  <Badge><Link to ='/findProducts' style={{color: 'white'}}> Find Products </Link></Badge>







          </>  
          )
       }
      return (
        <>




        {/* <Badge style={{color: 'white'}} href="/register">Register</Badge> */}
        {/* <Badge><Link to ='/register' style={{color: 'white'}}>Register </Link></Badge> */}


      
                    
         </>

      )
}

    const renderLeftNav = ()=>{

      if(auth.user){
        return  (
          <>
          <Badge onClick={auth.handleLogout }>Logout</Badge>







            </>  
            )
         }
        return (
          <>




          {/* <Badge style={{color: 'white'}} href="/register">Register</Badge> */}
          <Badge><Link to ='/register' style={{color: 'white'}}>Register </Link></Badge>


        
                      
           </>

        )
  }
  

    // const renderLeft = ()=>{
    //     if( auth.user) {
    //         return (
    //             <NavDropdown.Item style={{color: 'white'}} href="/"><Badge>Home</Badge></NavDropdown.Item>123
    //         )
    //     }
    // }
    return (

        <div>
             <Navbar sticky="top" variant="dark" bg="dark"  expand='lg'>

  <Container fluid>
    <Navbar.Brand href="/">
       <Badge bg='dark' >
        <h3>Etsy</h3>
       </Badge>
      </Navbar.Brand>

        <NavDropdown 
          id="nav-dropdown-dark-example"
          align={{ sm: 'end' }}
          title="Menu"
          menuVariant="dark"
        >


          <NavDropdown.Item style={{color: 'white'}} href="/"><Badge>Home</Badge></NavDropdown.Item>
          
          
          <NavDropdown.Item>{renderRightNav()}</NavDropdown.Item>
          <NavDropdown.Item>{renderCenterNav()}</NavDropdown.Item>
          <NavDropdown.Item>{renderCenterNav2()}</NavDropdown.Item>
          <NavDropdown.Item>{renderLeftNav()}</NavDropdown.Item>

          



          {/* <NavDropdown.Item><Badge onClick={auth.handleLogout } >Logout</Badge></NavDropdown.Item>

          <NavDropdown.Item style={{color: 'white'}} href="/"><Badge>Home</Badge></NavDropdown.Item> */}
              
          
         
        </NavDropdown>


  </Container>
</Navbar>

        </div>
    )
} 
export default NavBar