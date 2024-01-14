import { Box, Button, FormControlLabel, IconButton, InputBase, Select, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";
import NavBar from "../../components/header/navbar";
import HeadRetour from "../../components/headRetour/headRetour";
import Input from "@mui/material/Input";
import Checkbox from "@mui/material/Checkbox";  
import { useEffect, useState } from "react";
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css'
import axios from "axios";
import { CandidatCard  ,StyleSousTitre,SousTitreConfig,SousTitreRecap} from "../../components/scrutinControllers/scrutinController";


function ScrutinElection(){
    const [estPublic, setEstPublic] = useState(false)
    const [date, setDate] = useState(new Date)
    const [nom, setNom] = useState()
    const [configScrutin, setConfigScrutin]= useState({
        nom: "",
        date: new Date,
        description : "",
        debutTemps: "",
        finTemps: "",
        type:"",
        votantMax:"",
        nombreVotants: "",
        nombreCandidat:"",
    })

    const EnvoyerRequette =async ()=>{
        try{
            const response = await axios.post("http://localhost:8081/scrutin/creer",configScrutin)
            if (response.data.status === "success") alert("scrutin bien enregistre")
        }catch (e){
            console.log(e)
        }
    }
    useEffect(()=>{
        const axiosData = async () =>{
            try{
                const connecte = await axios.get("http://localhost:8081/user/estConnecte")
                if (connecte.data.status=== "success"){
                    setNom(connecte.data.nom)
                }
            }catch (e){
                console.log("" + e);
            }
        } 
        axiosData()
    },[])
    console.log(nom);
    return <Box>
        <NavBar/>
        <HeadRetour nom="Election loyale"/>
        <form method="get">
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
                        Height:"500px",
                        borderRadius: "15px",
                        padding: "20px",
                        position:"relative",
                        "@media screen and (max-width : 920px)": {
                            gridRow: "200px"    
                        },
                        "@media screen and (max-width : 600px)": {
                            border: "0",
                            Height:"500px",
                            borderRadius: "15px",
                            padding: "20px",
                            height:"auto"
                        }
                    }}
                >
                    <Typography
                        sx={StyleSousTitre}
                    >
                        calendrier
                    </Typography>
                    <Calendar
                        fontFamily="cursive"
                        selectRange
                        onChange={(e)=>{
                            setDate(e)
                            console.log(e);
                        }}
                        sx={{
                            width:"100%",
                            height:"100%"
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        border: "2px solid var(--thirst)",
                        Height:"500px",
                        borderRadius: "15px",
                        padding: "20px",
                        overflowY: "scroll",
                        "@media screen and (max-width : 600px)": {
                            border: "0",
                            HeadRetoureight:"500px",
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
                        <Input placeholder="Votre nom" fullWidth />
                        <Input placeholder="Votre prenom" />
                        <Input placeholder="Adresse" />
                        <Input placeholder="Telephone" />
                        <Input placeholder="Ville" />
                        <Input placeholder="Cin" type="number" />
                    </Box>
                    <SousTitreConfig titre="Parametre d'election"/>
                    <Box sx={{columnGap: "100px"}}>
                        <Input placeholder="Nom d'election" fullWidth onChange={(e)=> setConfigScrutin({...configScrutin , nom : e.target.value})} />
                        <Input placeholder="Description" fullWidth onChange={(e)=> setConfigScrutin({...configScrutin , description : e.target.value})}/>
                        <input type="time" 
                            onChange={(e)=>setConfigScrutin({...configScrutin, debutTemps : e.target.value})}
                            style={{
                                width: "100%" , 
                                margin :"4px 0px"
                            }} 
                        /> <br />
                        <input type="time" 
                            onChange={(e)=>setConfigScrutin({...configScrutin, finTemps : e.target.value})}
                            style={{
                                width: "100%" , 
                                margin :"4px 0px"
                            }} 
                        /> <br />
                        <Box
                            sx={{
                                background: "var(--second)",
                                padding:"3px 10px",
                                fontFamily: "unigeo3",
                                color: "var(--primary)",
                                borderRadius:"5px",
                                display:" flex",
                                alignItems: "center",
                                justifyContent:"space-between"
                            }}
                        >
                            <Typography>Type</Typography>
                            <FormControlLabel control={<Checkbox />}
                                label="public"
                            />
                        </Box>  
                        <Input placeholder="Nombre de candidat" type="number"
                            onChange={(e)=>setConfigScrutin({...configScrutin, nombreCandidat : e.target.value})}
                        />
                        <CandidatCard/>
                        <CandidatCard/>
                        <CandidatCard/>
                        <Input placeholder="Telephone"/>
                        <Input placeholder="Ville"/>
                        <Input placeholder="Cin"/>
                    </Box>
                </Box>
                <Box sx={{
                        justifyContent:" space-betweeen"
                    }}
                >
                    <Box sx={{
                            border: "2px solid var(--thirst)",
                            minHeight:"500px",
                            borderRadius: "15px",
                            borderBottomLeftRadius:"0px",
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
                    <Button type="submit" onClick={EnvoyerRequette} sx={{
                        marginTop:"50px",
                        display:"flex",
                        justifyContent:"center",
                        columnGap:"20px",
                        width:"100%",
                        background:"var(--thirst)",
                        color:"var(--primary)",
                        height:"50px",
                        borderRadius:"0px",
                        borderBottomRightRadius: "15px"
                    }}>
                        <Send/>
                        <Typography>Valider</Typography>
                    </Button>
                </Box>
            </Box>
        </form>
    </Box>
}
export default ScrutinElection