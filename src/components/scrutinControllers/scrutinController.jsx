import { Box,Typography } from "@mui/material"
import { AccountBox } from "@mui/icons-material"
function CandidatCard (){
    return <Box
        sx={{
            width:"80px",
            height:"100px",
            border: "var(--second) solid 2px"
        }}
    >
        <AccountBox
            sx={{
                fontSize:"50px"
            }}
        />
        <img src=".\public\assets\image\profile.jpg" alt="" srcset="" className="imageCandidat"/>
    </Box>
}
function SousTitreConfig ({titre}){
    return <Typography
        letterSpacing="3px"
        fontWeight="10px"
        margin="5px 0px"
        color="var(--second)"
        sx={{
            "@media screen and (max-width : 600px)": {
                marginLeft: "-15px"
            }
        }}
    >
        {titre}
    </Typography>
}

function SousTitreRecap ({label,configScrutin}){
    return <Box sx={{
        display: "flex",
        alignItems: "center"
    }}>
        <Typography
            color="var(--second)"
            textTransform="capitalize"
        >{label} </Typography>
        <Typography 
            fontWeight="700"
        >
            { 
                configScrutin || "votre nom scrutin"
            }
        </Typography>
    </Box>
}
const StyleSousTitre={
    color: "var(--thirst)",
    fontWeight: "900",
    fontFamily: "cursive",
    fontSize: "20px",
    textAlign: "center",
    textTransform :"capitalize",
    marginBottom: "10px"
}
export {CandidatCard,SousTitreConfig,SousTitreRecap ,StyleSousTitre}