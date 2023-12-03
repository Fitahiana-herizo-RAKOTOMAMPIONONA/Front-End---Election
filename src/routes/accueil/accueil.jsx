import { Box } from "@mui/material";
import { Component } from "react";
import NavBar from "../../components/header/navbar";

class Accueil extends Component{
    render(){
        return <Box>
               <NavBar connecte={true}/>
        </Box>
    }
}
export default Accueil