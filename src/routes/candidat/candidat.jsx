import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { CandidatCard } from "../../components/scrutinControllers/scrutinController";
import axios from "axios";
function CandidatPage(){
    const [configScrutin, setConfigScrutin]= useState({
        nom: "",
        date: new Date,
        description : "",
        debutTemps: "",
        finTemps: "",
        type:"",
        votantMax:"",
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
        if(localStorage.getItem("configScrutin")){
            setConfigScrutin(JSON.parse(localStorage.getItem("configScrutin")))
            localStorage.removeItem("configScrutin")
        }
    },[])
    console.log(configScrutin);
    return <Box>
        <Box display={"block"} margin={"auto"}>
            {
                Array.from({length: configScrutin.nombreCandidat>2 ? configScrutin.nombreCandidat : 2} , (item,index)=>{
                    return   <CandidatCard key={++index} x={++index}/> 
                })
            }
        </Box>
    </Box>
}
export default CandidatPage