import { Box ,Typography } from "@mui/material"
import Checkbox from "@mui/material/Checkbox";
const BulletinDeVote = ({image,numero,candidat,profession,slogan}) =>{
    return <Box
        sx={{
            width:"100%",
            height:"200px",
            border: "2px solid var(--thirst)",
            borderRadius:"10px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 2fr 1fr",
            marginBottom:"50px",
            overflow: "none",
            "@media screen and (max-width: 900px)":{
                width:"96%" ,
                margin: "auto",
                height:"150px",
                marginBottom:"50px"
            }
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
                borderRight:"var(--thirst) solid 1px",
                overflowY: "hidden",
            }}
        >
            <Typography sx={{
                fontSize: "100px",
                padding:"30px 0px",
            }}>{numero}</Typography>
        </Box>
        <Box
            sx={{
                padding:"30px 10px",
                borderRight:"var(--thirst) solid 1px",
                overflowY: "auto",
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



export { BulletinDeVote}