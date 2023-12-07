import React, { useState } from "react";
import { Typography, Box, Button, IconButton } from "@mui/material";
import { NotificationImportantOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
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
        }}
      >
        <Link to={to}>
          {item}
        </Link>
      </Typography>
    </Box>
  );
}

function NavBar({ connecte }) {

  const [estConnecte,setEstConnecte] = useState(connecte)

  return (
    <Box display="flex" justifyContent="space-between" paddingTop="10px"  className="NavBar">
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
      <Box>
        <ul className="listeNav">
          {dataNavBar.map((item, index) => (
            <NavListe item={item.nom} to={item.chemin} key={index} />
          ))}
        </ul>
      </Box>
      {connecte ? (
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
          
        </Box>
      ) : (
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
      )}
    </Box>
  );
}

export default NavBar;
