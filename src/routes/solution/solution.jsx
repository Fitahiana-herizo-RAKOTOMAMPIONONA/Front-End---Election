import { Box, Button, Typography } from "@mui/material";
import { Component } from "react";
import NavBar from "../../components/header/navbar";
import './solution.css'
import { Link } from "react-router-dom";

function SolutionComponent ({nom,to,description}){
    return <Box 
                width="300px"
                border="1px solid var(--thirst)"
                padding="20px"
                borderRadius="10px"
                position="relative"
                sx={{
                    cursor: "pointer",
                    ":hover" : {
                        boxShadow: "2px 2px 5px",
                        scale: "1.05"
                    }
                }}
            >
                <Typography 
                    fontFamily="Roboto sans-serif"
                    textAlign='center'
                    fontWeight="900"
                    fontSize="30px"
                >
                    {nom}
                </Typography>
                <Box width="100%">
                    <img src="./assets/image/temps.jpg" alt="" srcSet="" className="photoSolution" width="100%" />
                </Box>
                <Box>
                    <Typography>
                        {description}
                    </Typography>
                </Box>
                <Box>
                   <Link to={to}>
                    <Button>
                            Demo
                    </Button>
                   </Link>
                </Box>

            </Box>
}

class Solution extends Component{
    render(){
        return <Box>
               <NavBar/>
               <Box 
                    display="flex"
                    // flex="wrap"
                    justifyContent="center"
                    flexWrap="wrap"
                    rowGap="20px"
                    columnGap="20px"
                    sx={{
                        "@media screen and (max-width: 1368)" : {
                            marginTop: "100px"
                        }
                    }}
                >
                    <SolutionComponent nom="Scrutin " description="election comme election presidetielle" to="./Scrutin"/>
                    <SolutionComponent nom="Referendum" description="ex :referendum d,un entreprise"  to="./Referendum"/>
                    <SolutionComponent nom="Scrutin Simple" description="ex : Hit Lounge"  to="./Simple"/>
               </Box>
        </Box>
    }
}
export default Solution