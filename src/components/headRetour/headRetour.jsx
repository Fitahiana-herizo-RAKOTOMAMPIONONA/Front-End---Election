import { Box, IconButton, Typography } from "@mui/material";
import { SkipPrevious } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function HeadRetour({ nom,to}){
    return <Box
        sx={{
            width:"100%",
            display: "flex",
            justifyContent: "space-around",
            // marginTop:"30px",
            alignItems: "center",
        }}
    >
        <Link to={to} style={{flex:1}}>
            <IconButton>
                <SkipPrevious sx={{
                    color: "var(--second)",
                    fontWeight: "900"
                }}/>
            </IconButton>
        </Link>
        <Typography 
            flex={"2"}
            fontFamily="cursive"
            fontWeight="bold"
            fontSize="20px"
            color="var(--second)"
            textAlign={"center"}
        >    
            {nom}
        </Typography>
        <Box sx={{flex: 1}}>

        </Box>
    </Box>
}