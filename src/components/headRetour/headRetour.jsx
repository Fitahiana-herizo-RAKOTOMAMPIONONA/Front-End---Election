import { Box, IconButton, Typography } from "@mui/material";
import { SkipPrevious } from "@mui/icons-material";

export default function HeadRetour({ nom}){
    return <Box
        sx={{
            width:"100%",
            display: "flex",
            justifyContent: "space-around",
            marginTop:"30px",
            alignItems: "center",
        }}
    >
        <IconButton>
            <SkipPrevious sx={{
                color: "var(--second)",
                fontWeight: "900"
            }}/>
        </IconButton>
        <Typography 
            fontFamily="cursive"
            fontWeight="bold"
            fontSize="20px"
            color="var(--second)"
        >    
            {nom}
        </Typography>
        <Box>

        </Box>
    </Box>
}