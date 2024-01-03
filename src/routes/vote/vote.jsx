import { Box, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import NavBar from "../../components/header/navbar";
import './vote.css'
import axios from "axios";
import VoteComponent from "../../components/voteComponent/voteComponent";
import Footer from "../../components/footer/footer";
import useFetch from "../../state/useFetch";
import { Link } from "react-router-dom";
import { Search } from "@mui/icons-material";

function Vote () {
        const {data,load, erreur} = useFetch("http://localhost:8081/scrutin/tout")
        const [query,setQuery] = useState("")
        const FiltrerParNom = (query) =>{
            return data.filter((element)=>{
                if  (element.nom.toLowerCase().includes(query.toLowerCase()) /* || element.description.toLowerCase().includes(query.toLowerCase())*/) 
                    return element
            })
        }
        return <Box>
            <NavBar/>
            <Box
                sx={{
                    width:"100%",
                    borderRadius: "10px",
                    height:"50px",
                    display: "flex",
                    justifyContent:"center",
                    alignItems: "center",
                    padding:"5px"
                }}
            >
                <Input placeholder="chercher"
                    onChange={(e)=>{
                        setQuery(e.target.value)
                    }}
                />
                <Search/>
            </Box>
            {/* <Typography
                sx={{
                    fontWeight: "20",
                    fontSize: "20px",
                    letterSpacing:"3px",
                    marginBottom:"50px",
                    textTransform:"capitalize"
                }}
            >
                plus populaire
            </Typography> */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    marginBottom: "100px",
                    gap: "15px"
                }}
            >
                {
                    FiltrerParNom(query).map((value, index)=>{
                        return<VoteComponent
                                    key={index}
                                    nom={value.nom}
                                    description={value.description}
                                    type={value.type}
                                    votant={value.votantMax}
                                    statVotant={value.statistiqueVotants}
                                    date={value.date}
                                />
                    })
                }
            </Box>
            <Footer/>
        </Box>
}
export default Vote