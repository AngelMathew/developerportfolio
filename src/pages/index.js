import * as React from "react";
import { Router } from "@reach/router";
import Home from "../pages/home";
import Header from "../components/Header/Header";
import Info from "../components/Info/Info";
import Contact from "../components/Contact/Contact";
// markup
const IndexPage = () => {
  return (
    
    <main>
      
      <title>Home Page</title>
    
      {/* <Header/> */}
      <Router>
    <Home path="/"/>
     </Router>
    
   
      {/* <Link to="/home/">Contact</Link> */}

     
      
    </main>
  )
}

export default IndexPage
