import { Box, InputBase, Typography } from "@mui/material";
import NavBar from "../../components/header/navbar";
import HeadRetour from "../../components/headRetour/headRetour";
import Input from "@mui/material/Input";
import Checkbox from "@mui/material/Checkbox";
import SelectInput from "@mui/material/Select/SelectInput";
import { useEffect, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";


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


function ScrutinElection(){
    const StyleSousTitre={
        color: "var(--thirst)",
        fontWeight: "900",
        fontFamily: "cursive",
        fontSize: "20px",
        textAlign: "center",
        textTransform :"capitalize",
        marginBottom: "10px"
    }
   const [configScrutin, setConfigScrutin]= useState({
        nom: "",
        date: new Date,
   })
   console.log(configScrutin)
    return <Box>
        <NavBar/>
        <HeadRetour nom="Election loyale"/>
        <Box
            sx={{
                display:"grid",
                gridTemplateColumns: "1fr 2fr 1fr",
                columnGap: "20px",
                "@media screen and (max-width : 1172px)": {
                    gridTemplateColumns: "1fr 2fr",

                },
                "@media screen and (max-width : 920px)": {
                    gridTemplateColumns: "1fr",
                    rowGap:"30px"

                }
            }}
        >
            <Box
                 sx={{
                    border: "2px solid var(--thirst)",
                    minHeight:"500px",
                    borderRadius: "15px",
                    padding: "20px",
                    // "@media screen and (max-width : 1172px)": {
                        //     gridTemplateColumns: "1fr 2fr",
                        
                        // },
                        "@media screen and (max-width : 920px)": {
                            gridRow: "200px"
                        },
                        "@media screen and (max-width : 600px)": {
                            border: "0",
                            minHeight:"500px",
                            borderRadius: "15px",
                            padding: "20px",
                        }
                }}
            >
                <Typography
                    sx={StyleSousTitre}
                >
                    calendrier
                </Typography>
            </Box>
            <Box
                sx={{
                    border: "2px solid var(--thirst)",
                    minHeight:"500px",
                    borderRadius: "15px",
                    padding: "20px",
                    overflowY:"scroll",
                    "@media screen and (max-width : 600px)": {
                        border: "0",
                        minHeight:"500px",
                        borderRadius: "15px",
                        padding: "40px",
                    }
                }}
            >
                 <Typography
                    sx={StyleSousTitre}
                 >
                    Paramètre
                </Typography>
                <SousTitreConfig titre="vos Information"/>
                <Box sx={{columnGap: "100px"}}>
                    <Input 
                        placeholder="Votre nom"
                        fullWidth
                    />
                     <Input 
                        placeholder="Votre prenom"
                    />
                    <Input 
                        placeholder="Adresse"
                    />
                    <Input 
                        placeholder="Telephone"
                    />
                    <Input 
                        placeholder="Ville"
                    />
                    <Input 
                        placeholder="Cin"
                        type="number"
                    />
                </Box>
                <SousTitreConfig titre="Parametre d'election"/>
                <Box sx={{columnGap: "100px"}}>
                    <Input 
                        placeholder="Nom d'election"
                        fullWidth
                        onChange={(e)=> setConfigScrutin({...configScrutin , nom : e.target.value})}
                    />
                    {/* <Input type={Date} sx={{display: "block"}}  placeholder="18 / 12 / 2023" /> */}
                    <input 
                        type="date" 
                        style={{
                            width: "100%" , 
                            margin :"4px 0px"
                        }} 
                        onChange={(e)=>setConfigScrutin({...configScrutin, date : e.target.value})}
                    /> <br />
                    <Checkbox value="Public" /> public
                    <Checkbox value="Public"/> prive<br />
                    <Input 
                        placeholder="Adresse"
                    />
                    <Input 
                        placeholder="Telephone"
                    />
                    <Input 
                        placeholder="Ville"
                    />
                    <Input 
                        placeholder="Cin"
                    />
                </Box>
            </Box>
            <Box
                sx={{
                    border: "2px solid var(--thirst)",
                    minHeight:"500px",
                    borderRadius: "15px",
                    padding: "20px",
                    "@media screen and (max-width : 600px)": {
                        borderRadius: "15px",
                        padding: "40px",
                        margin:"20px"
                    }
                }}
            >
                 <Typography
                    sx={StyleSousTitre}
                 >
                    Resumé
                </Typography>
                <SousTitreRecap label="Nom : " configScrutin={configScrutin.nom} />
                <SousTitreRecap label="date : " configScrutin={configScrutin.date.toString()} />
                <SousTitreRecap label="type : " configScrutin={configScrutin.type} />
            </Box>
        </Box>
    </Box>
}
export default ScrutinElection