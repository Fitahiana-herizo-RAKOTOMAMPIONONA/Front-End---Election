import { Box, Typography } from "@mui/material";
import NavBar from "../../components/header/navbar";
import "./apropos.css"
const CardEquipe = () =>{
    return <Box>
        
    </Box>
}
export default function Apropos(){
    return <Box>
        <NavBar/>
            <Typography
                sx={{
                    fontFamily:"cursive",
                    fontWeight:"800",
                    fontSize:"35px",
                    textAlign: "center",
                    textTransform:"capitalize",
                    letterSpacing: "3px",
                    color: "var(--second)",
                }}
            >
                Temoignage
            </Typography>
            <Typography
                sx={{
                    fontFamily:"cursive",
                    fontWeight:"800",
                    fontSize:"35px",
                    textAlign: "center",
                    textTransform:"capitalize",
                    letterSpacing: "3px",
                    color: "var(--second)",
                }}
            >
                Contactez nous
            </Typography>
               <Box>
                    <form action="" method="post">

                    </form>
               </Box>
               <Typography
                sx={{
                    fontFamily:"cursive",
                    fontWeight:"800",
                    fontSize:"35px",
                    textAlign: "center",
                    textTransform:"capitalize",
                    letterSpacing: "3px",
                    color: "var(--second)",
                }}
               >
                    Notre equipe
               </Typography>
        </Box>
}