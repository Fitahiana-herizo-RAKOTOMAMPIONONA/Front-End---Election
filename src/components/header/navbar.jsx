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
  return (
    <Box>
      <Typography
        sx={{
          marginLeft: "20px",
          cursor: "pointer",
          fontFamily: "cursive",
          color: "var(--second)",
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

  axios.defaults.withCredentials = true
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8081");
        if (response.data.status=== "success"){
          setNom(response.data.nom)
          setConnecte(true)
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

  return (
    <Box 
      display="flex"
      justifyContent="space-between"
      paddingTop="10px"
      className="NavBar"
      marginBottom="50px"
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
              <IconButton>
                <img
                  src="./assets/image/profile.jpg"
                  alt=""
                  className="imagePhotoProfil"
                />
              </IconButton>
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
