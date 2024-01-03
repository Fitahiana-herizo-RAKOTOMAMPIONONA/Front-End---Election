import { Box, Typography } from "@mui/material";
import HeadRetour from "../../components/headRetour/headRetour";
import NavBar from "../../components/header/navbar";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";


const BulletinDeVote = ({image,numero,candidat,profession,slogan}) =>{
    return <Box
        sx={{
            width:"100%",
            height:"200px",
            border: "2px solid var(--thirst)",
            borderRadius:"10px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 2fr 1fr",
            marginBottom:"50px"
        }}  
    >
        <Box
            sx={{
                position:"relative",
                borderRight:"var(--thirst) solid 1px"
            }}
        >
            <img src={image} alt="" srcSet="" width="100%" height="100%" className="pdp"/>
        </Box>
        <Box
            sx={{
                borderRight:"var(--thirst) solid 1px"
            }}
        >
            <Typography sx={{
                fontSize: "100px",
                padding:"30px 0px"
            }}>{numero}</Typography>
        </Box>
        <Box
            sx={{
                padding:"30px 10px",
                borderRight:"var(--thirst) solid 1px"
            }}
        >
            <Typography sx={{
                fontSize: "30px",
                fontWeight: "800",
                color:"var(--second)",
                textTransform:"capitalize",
                padding:"10px 0px"
            }}>{candidat}</Typography>
            <Typography sx={{
                fontSize: "20px",
                fontWeight: "100",
                color:"var(--four)",
            }}>{profession}</Typography>
            <Typography sx={{
                fontSize: "15px",
                fontWeight: "100",
                fontStyle: "italic",
                color:"var(--four)",
            }}>{slogan}</Typography>
        </Box>
        <Box>
            <Checkbox sx={{
                width:"200px",
                height:"200px"
            }}/>
        </Box>
    </Box>
}

export default function ScrutinComponent ({nom,imagePdc}) {
    const data = []
    return <Box>
        <NavBar/>
        <HeadRetour nom={nom || "election Presidentielle"}/>
        <Box
            sx={{
                position: "relative",
                width:"100%",
                height:"500px",
                objectFit:"contain",
                marginBottom:"100px"
            }}
        >
            <img src={imagePdc || "./assets\image\pdcVote.jpg"} alt="" srcSet="" width="100%" height="100%"/>
        </Box>
        <Box
            sx={{
                display: "flex",
                justifyContent:"center",
                columnGap:"100px",
                position:"relative"
            }}
        >
            <Box
                sx={{
                    width:"30%",
                    height:"400px",
                    border: "2px solid var(--thirst)",
                    borderRadius:"10px",
                    padding:"10px",
                }}
                >
                hth
            </Box>
            <Box
                sx={{
                    width:"60%",
                    height:"auto"
            }}>
                {
                    data.map((item,index)=>{
                        return <div></div>
                    })
                }
                <BulletinDeVote image="./assets\image\profile.jpg" numero="01" candidat="rahery kely" profession="enseignant" slogan="fihavanana - fihavaozaana - fitiavana"/>
                <BulletinDeVote image="./assets\image\profile.jpg" numero="02" candidat="fidelis junior" profession="Pilote" slogan="fihavanana - fihavaozaana - fitiavana"/>
                <BulletinDeVote image="./assets\image\profile.jpg" numero="03" candidat="Andry rajoelina" profession="Dj" slogan="fihavanana - fihavaozaana - fitiavana"/>
            </Box>
        </Box>
    </Box>
}