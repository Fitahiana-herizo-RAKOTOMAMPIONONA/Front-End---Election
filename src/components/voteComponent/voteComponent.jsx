import { SendAndArchiveOutlined ,InfoRounded, CalendarMonth} from "@mui/icons-material";
import { Box ,Typography } from "@mui/material";
export default function VoteComponent ({logo,nom,description,type,votant,statVotant,date,couverture}){
    return <Box sx={{ 
                width: "100%", 
                border :"2px var(--second) solid", 
                display: "grid", 
                gridTemplateColumns: "1fr 5fr 3fr", 
                borderRadius: "10px", 
                position: "relative", 
                height:"200px", 
                overflow:"hidden", 
                margin: "20px 0px", 
                cursor: "pointer",
                "@media screen and (max-width : 600px)" : {
                    width: "94%",
                    marginLeft: "3%",
                    height : "100px",
                    gridTemplateColumns: "1fr 5fr", 
                    borderRadius: "4px",
                }
    }}> 
        <Box sx={{ width:"180px", padding: "20px",
            "@media screen and (max-width : 600px)" : {
                width:"50px",
                padding: "20px",
            }
        }}>
            {
                logo!==undefined ? (
                    <img src={logo} alt="" srcSet=""  width="90%"/>
                    ):(
                    <img src="./assets/image/securise.png" alt="" srcSet=""  width="90%"/>
                )
            }
        </Box>
        <Box 
            overflow="scroll"
            >
            <Typography fontFamily="cursive" fontSize="23px" fontWeight="900" marginTop="10px"
                sx={{
                    "@media screen and (max-width : 600px)" : {
                        fontSize:"15px"
                    }
                }}
            >
                {nom}
            </Typography>
            <Typography fontFamily="cursive" fontWeight="10" fontSize="12px"
                sx={{
                    "@media screen and (max-width : 600px)" : {
                        fontSize:"10px"
                    }
                }}
            >
                {description}
            </Typography>
            <Typography fontFamily="cursive" fontWeight="800" fontSize="15px" margin="7px 0px">  {type}  </Typography>
            <Box sx={{ display: "flex", alignItems: "center", columnGap:"30px" }}>
                <Box sx={{ display: "flex", alignItems: "center", columnGap:"5px" }}>
                    <SendAndArchiveOutlined/>
                    <Typography fontSize="15px"
                        sx={{
                            "@media screen and (max-width : 600px)" : {
                                fontSize:"10px"
                            }
                        }}
                    >
                        {votant}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <InfoRounded/>
                    <Typography
                        sx={{
                            "@media screen and (max-width : 600px)" : {
                                fontSize:"10px"
                            }
                        }}
                    > {statVotant} </Typography>
                </Box>
            </Box>
            <Box
                sx={{ display: "flex", alignItems: "center", margin:"6px 0px" }}>
                <CalendarMonth/>
                <Typography
                    sx={{
                        "@media screen and (max-width : 600px)" : {
                            fontSize:"10px"
                        }
                    }}
                >
                    {date}
                </Typography>
            </Box>
        </Box>
        <Box 
            sx={{
                "@media screen and (max-width : 600px)" : {
                    display: "none",
                    opacity: "0",
                    visibility: "hidden"
                }
            }}
        >
            {
                couverture!==undefined ? (
                    <img src={couverture} alt="" srcSet=""  width="100%" height="100%" className="pdcVote"/>
                    ):(
                    <img src="./assets/image/pdcVote.jpg" alt="" srcSet="" width="100%" height="100%" className="pdcVote" />
                    )
            }
            
        </Box>
    </Box>
}
