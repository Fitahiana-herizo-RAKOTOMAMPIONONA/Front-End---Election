import React, { useEffect } from "react";
import { useState } from "react";
import { Typography, Box, Button, IconButton } from "@mui/material";
import { FacebookOutlined, Instagram, NotificationImportantOutlined, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";
import { dataNavBar } from "../../data/navbar";
import "./navbar.css";
// import {Menu} from "@mui/icons-material"
// import Input from "@mui/material/Input";
// import { Search } from "@mui/icons-material"; 

export function NavListe({ item, to }) {
  return ( <Box>
      <Typography
      sx={{
        marginLeft: "20px",
        cursor: "pointer",
        // color: "var(--primary)",
        fontFamily : "unigeo3",
        borderBottom: "3px solid transparent",
        ":hover":{
          paddingBottom: "0",
          borderBottom: "3px solid",
          borderRadius:"3px",
        }
      }}
    >
      <Link to={to} sx={{textDecoration:"none", color: "var(--primary)"}}>
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
  const [now,setNow]= useState(Date)
  const [time,setTime]=useState(new Date)

  useEffect(()=>{
    const intervalleTime = setInterval(()=>{
        setTime(new Date)
    },1000)
    return ()=> clearInterval(intervalleTime) 
  },[])
  setInterval(()=>{
    setNow(Date().toString())
  },1000)
    axios.defaults.withCredentials = true
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8081/user/estConnecte");
                if (response.data.status=== "success"){
                    setConnecte(true)
                    setPdp(false)
                    setNom(response.data.nom)
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

  return (
    <Box
      sx={{
        position: "sticky",
        paddingTop: "5px",
            // "@media screen and (max-width:1500px)":{
            //     marginLeft: "20px",
            //     marginRight: "20px",
            // }
        }}
      // sx={{
      //   // width: "auto",
      // //   "@media screen and (max-width: 1200px)":{
      // //     margin: 0,
      // // }
      // }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom:"5px"
        }}
      >
        <Box sx={{
          flex: "1",
          gap:"5px"
        }}>
          <IconButton>
            <FacebookOutlined/>
          </IconButton>
          <IconButton>
            <Instagram/>
          </IconButton>
          <IconButton>
            <Twitter/>
          </IconButton>
        </Box>
        <Box
          sx={{
            flex:"1",
            textAlign:"center"
          }}
        >
          <Typography
            fontFamily="nexa1"
            color="var(--second)"
          >
            Voteo
          </Typography>
        </Box>
        <Box sx={{flex: 1}}>
            {connecte ? (
              <Box display="flex" justifyContent="end">
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
            <Box display="flex" justifyContent="end">
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
      </Box>
      <Box 
        sx={{
          display:"flex",
          // justifyContent:" center",
          justifyContent:"space-between",
          alignItems:"center",
          background:"var(--second)",
          color:"var(--primary)",
          padding: "10px 0px",
          "@media screen and (max-width : 600px)":{
            background:"var(--second)",
            color:"var(--primary)",
          }
        }}
      >
          <Box>
            <ul className="listeNav">
              {dataNavBar.map((item, index) => (
                <NavListe item={item.nom} to={item.chemin} key={index} />
              ))}
            </ul>
          </Box>
          <Box>
            {/* {time} */}
            {/* {now.getHours()} */}
          </Box>
      </Box>
    </Box>
  );
}

export default NavBar;
