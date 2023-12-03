import { Box } from "@mui/material";
import { Component } from "react";
import NavBar from "../../components/header/navbar";

class Apropos extends Component{
    render(){
        return <Box>
               <NavBar connecte={false}/>
        </Box>
    }
}
export default Apropos