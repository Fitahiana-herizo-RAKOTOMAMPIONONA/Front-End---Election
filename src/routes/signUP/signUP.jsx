import { Box, Button, IconButton, Typography } from "@mui/material";
import "./signUP.css"
import { Link } from "react-router-dom";
import {NextWeek ,Google} from "@mui/icons-material"
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
function SignUP(){

    const [values ,setValues] = useState({
        nom :"",
        email: "",
        motDePasse: ""
    })
    const navigate = useNavigate()
    const EnvoyerReponse= (e)=>{
        e.preventDefault()
        axios.post("http://localhost:8081/register" , values)
        .then(res => {
         navigate('/signIn')
        })
        .catch(error => console.log(error))
    }

    return <Box width="100%" position="relative">
        <Typography fontWeight="bold" fontSize="20px">
            E-vote
        </Typography>
        <Box sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "100px",
        }}>
            <form onSubmit={EnvoyerReponse}>
                <Box>
                    <IconButton>
                        <NextWeek/>
                    </IconButton>
                    <Box  sx={{
                        border: "2px var(--thirst) solid",
                        borderRadius: "30px",
                        width: "400px",
                        padding: "50px",
                        '@media screen and (max-width: 600px)': {
                            border: 0,
                            width: "100%",
                            padding: 0,
                        }

                        }}
                    >
                        <Typography sx={{
                            textAlign: "center",
                            fontFamily: "cursive",
                            color: "var(--second)",
                            fontWeight: "bold",
                            fontSize: "30px",
                        
                        }}>
                            S'inscrire
                        </Typography>
                        <Typography className="legendeChamp">
                            Nom
                        </Typography>
                        <input 
                            type="text" 
                            name="nom" 
                            id="nom"  
                            className="champInput" 
                            onChange={e =>setValues({...values, nom : e.target.value})}
                            />

                        <Typography>
                            E-mail
                        </Typography>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"  
                            className="champInput" 
                            onChange={e =>setValues({...values, email : e.target.value})}
                            />

                        <Typography>
                            Mot de passe
                        </Typography>
                        <input 
                            type="password" 
                            name="motDePasse" 
                            id="motDePasse"  
                            className="champInput"
                            onChange={e =>setValues({...values, motDePasse : e.target.value})}
                        />
                        <Button type="submit" sx={{
                            width: "100%",
                            textAlign: "center",
                            backgroundColor: "var(--thirst)",
                            color: "var(--primary)",
                            margin: "20px 0px"
                        }}>
                            Creer un compte
                        </Button>
                        <Typography textAlign="center" fontSize="15px">
                            <Link to="/signIn">
                                Avez vous déja un compte?
                            </Link>
                        </Typography>
                        <Button sx={{
                            width: "100%",
                            textAlign: "center",
                            border: "1px solid var(--thirst)",
                            alignItems: "center",
                            margin: "20px 0px"
                        }}>
                            <Google/>
                            continuez avec Google
                        </Button>
                    </Box>
                </Box>
            </form>
        </Box>
    </Box>
}
export default SignUP;