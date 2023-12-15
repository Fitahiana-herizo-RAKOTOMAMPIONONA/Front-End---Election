import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import NavBar from "../../components/header/navbar";
import './vote.css'
import axios from "axios";
import VoteComponent from "../../components/voteComponent/voteComponent";
import useFetch from "../../state/useFetch";

function Vote () {
        axios.g
        const {data,load, erreur} = useFetch("http://localhost:8081/scrutin/tout")
        return <Box>
            <NavBar/>
            <Typography
                sx={{
                    fontWeight: "20",
                    fontSize: "20px",
                    letterSpacing:"3px",
                    marginBottom:"50px",
                    textTransform:"capitalize"
                }}
            >
                plus populaire
            </Typography>
            {
                data.map((value, index)=>{
                    return <VoteComponent
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
}
export default Vote