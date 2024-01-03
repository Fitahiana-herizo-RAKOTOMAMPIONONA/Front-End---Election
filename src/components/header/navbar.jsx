import React, { useEffect } from "react";
import { useState } from "react";
import { Typography, Box, Button, IconButton } from "@mui/material";
import { NotificationImportantOutlined } from "@mui/icons-material";
import {Menu} from "@mui/icons-material"
import { Link } from "react-router-dom";
import axios from "axios";
import { dataNavBar } from "../../data/navbar";
import "./navbar.css";


function NavListe({ item, to }) {
    return ( <Box>
        <Typography
        sx={{
          marginLeft: "20px",
          cursor: "pointer",
          fontFamily: "cursive",
          color: "var(--second)",
          ":hover":{
            paddingBottom: "0",
            borderBottom: "3px solid",
            borderRadius:"3px",
          }
          // background: "2px var(--second)",
          // borderRadius:"10px",
          // backgroundOrigin: "",
          // paddingBottom:"20px",
          // height:"20px"
        }}
      >
        <Link to={to}>
          {item}
        </Link>
      </Typography>
    </Box>
  );
}

function NavBar() {
    const [connecte,setConnecte] = useState(false)
    const [nom,setNom] = useState(null)
    const [pdp,setPdp] =useState(false)

    axios.defaults.withCredentials = true
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8081/user/estConnecte");
                if (response.data.status=== "success"){
                    setConnecte(true)
                    setNom(response.data.nom)
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
  const setFenetre =(e)=>{
    e.preventDefault()
    console.log("fenetr");
  }
  console.log(connecte)
  return (
    <Box 
      display="flex"
      justifyContent="space-between"
      paddingTop="10px"
      className="NavBar"
      alignItems="center"
      marginBottom="30px"
      sx={{
        "@media screen and (max-width: 600px)" : {
            position:"fixed",
            zIndex:"10",
            boxShadow : "0px 2px 10px ",
            backgroundColor : "var(--primary)",
            marginBottom: "100px"
          }
      }}
    >
      <Box display="flex" alignItems="center">
          <IconButton
            sx={{
              opacity: 0,
              visibility: "hidden",
              display: "none",
              "@media screen and (max-width: 600px)" : {
                opacity: 1,
                visibility: "visible" ,
                display: "block",
              }
            }}
            onClick={setFenetre}
          >
              <Menu/>
          </IconButton>
          <Box>
            <Typography
              sx={{
                fontFamily: "cursive",
                color: "var(--thirst)",
                cursor: "pointer"
              }}
            >
              E-vote
            </Typography>
          </Box>
      </Box>
      <Box 
        sx={{
          opacity: 1,
          visibility: "visible" ,
          display: "block",
          "@media screen and (max-width: 600px)" : {
            opacity: 0,
            visibility: "hidden",
            display: "none",
          }
        }}
      >
        <ul 
          className="listeNav"
        >
          {dataNavBar.map((item, index) => (
            <NavListe item={item.nom} to={item.chemin} key={index} />
          ))}
        </ul>
      </Box>
      {connecte ? (
              <Box display="flex" justifyContent="space-around">
              <IconButton>
                <NotificationImportantOutlined />
              </IconButton>
              {
                pdp || nom===null ? (
                  <IconButton> 
                    <img
                      src="./assets/image/profile.jpg"
                      alt=""
                      className="imagePhotoProfil"
                      /> 
                  </IconButton>
                ) : (
                  <IconButton 
                    sx={{
                      backgroundColor: "var(--thirst)",
                      padding: "0px 15px"
                    }}
                    >
                      <Typography
                        fontWeight="900"
                      >
                        {nom[0]}
                      </Typography>
                  </IconButton>
                )
              }
            </Box>
      ) : (
            <Box display="flex" justifyContent="space-around">
              <Link to="/signUp">
                <Button
                  sx={{
                    backgroundColor: "var(--thirst)",
                    color: "white",
                    padding: "5px 15px",
                    marginRight: "20px",
                    textTransform: "capitalize"
                  }}
                  >
                  S'inscrire
                </Button>
              </Link>
              <Link to="/signIn">
                  <Button
                    sx={{
                      color: "white",
                      backgroundColor: "var(--second)",
                      padding: "5px 15px",
                      textTransform: "capitalize"
                    }}
                  >
                    Se connecter
                  </Button>
              </Link>
              {nom}
              </Box>
      )}
    </Box>
  );
}

export default NavBar;
