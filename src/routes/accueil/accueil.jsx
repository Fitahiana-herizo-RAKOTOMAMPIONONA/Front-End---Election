import { Box } from "@mui/material";
import { Component } from "react";
import NavBar from "../../components/header/navbar";
import './accueil.css'

class Accueil extends Component{
    render(){
        return <Box>
               <NavBar/>
        </Box>
    }
}
export default Accueil