import { Box, Typography } from "@mui/material";
import HeadRetour from "../../components/headRetour/headRetour";
import NavBar from "../../components/header/navbar";
import Checkbox from "@mui/material/Checkbox";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import { BulletinDeVote } from "./scrutinComponentControllers";


export default function ScrutinComponent () {
    const [candidat,setCandidat] = useState([])
    const [info, setInfo] = useState({})
    const param =useParams()
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const result = await axios.get(`http://localhost:8081/scrutin/get/${param.id}`)
                setInfo(result.data)
            }catch(e){
                console.log(e);
            }
        }
        fetchData();
    }, [])
    console.log(info);

    return <Box>
        <NavBar/>
        <HeadRetour nom={info.nom || "election Presidentielle"} to="/vote"/>
        <Box
            sx={{
                position: "relative",
                width:"100%",
                height:"500px",
                objectFit:"contain",
                marginBottom:"20px"
            }}
        >
            <img src={"./assets\image\pdcVote.jpg"} alt="" srcSet="" width="100%" height="100%"/>
        </Box>
        <Box 
            sx={{
                padding: "20px",
            }}  
        >
            <Typography
                textAlign={"center"}
                fontFamily={"unigeo3"}
                fontSize={"20px"}
            >
                Description
            </Typography>
            <Typography
                textAlign={"center"}
                fontFamily={"unigeo3"}
                padding={"20px"}
            >
                {info.description}
            </Typography>
        </Box>
        <Box
            sx={{
                display: "flex",
                justifyContent:"center",
                columnGap:"100px",
                position:"relative",
                "@media screen and (max-width: 1200px)":{
                    display: "block",  
                }
            }}
        >
            <Box
                sx={{
                    width:"30%",
                    height:"400px",
                    border: "2px solid var(--thirst)",
                    borderRadius:"10px",
                    padding:"10px",
                    "@media screen and (max-width: 1200px)":{
                        width: "100%", 
                        height:"200px",
                        marginBottom:"50px"
                    },
                    // "@media screen and (max-width: 900px)":{
                    //     width: "100%", 
                    //     height:"200px",
                    //     marginBottom:"50px"
                    // },
                }}
                >
                hth
            </Box>
            <Box
                sx={{
                    width:"60%",
                    height:"auto",
                    "@media screen and (max-width: 1200px)":{
                        width:"100%" 
                    }
            }}>
                <BulletinDeVote image="./assets\image\profile.jpg" numero="01" candidat="rahery kely" profession="enseignant" slogan="fihavanana - fihavaozaana - fitiavana"/>
                <BulletinDeVote image="./assets\image\profile.jpg" numero="02" candidat="fidelis junior" profession="Pilote" slogan="fihavanana - fihavaozaana - fitiavana"/>
                <BulletinDeVote image="./assets\image\profile.jpg" numero="03" candidat="Andry rajoelina" profession="Dj" slogan="fihavanana - fihavaozaana - fitiavana"/>
            </Box>
        </Box>
        <Footer/>
    </Box>
}