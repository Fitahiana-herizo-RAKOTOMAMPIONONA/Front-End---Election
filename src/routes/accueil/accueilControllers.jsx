import { Box, Typography } from "@mui/material";

function CardAvantage({title,photo,description}){
    return <Box border={"2px var(--thirst) solid"} height={"500px"} width={"350px"} position={"relative"} sx={{boxSizing:"border-box"}} padding={"20px"}>
        <Typography fontFamily={"unigeo3"} color={"var(--second)"} textAlign={"center"} textTransform={"capitalize"} fontSize={"25px"}>
            {title}
        </Typography>
        <img src={photo} alt="" srcSet="" height={"100%"} className="imageAvantage"/>
        <Typography fontFamily={"unigeo2"} color={"var(--second)"} textAlign={"center"}>
            {description || "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias harum praesentium nemo? Minus veritatis sit dolorum nobis perferendis pariatur assumenda a facilis aliquam voluptates repellendus natus officiis velit, ducimus delectus!" }
            
        </Typography>
    </Box>
}
function CardStat({style,chiffre,nom}){
    return <Box backgroundColor={style} width={"200px"} height={"100px"} borderRadius={"10px"} padding={"15px"} boxSizing={"border-box"}>
        <Box 
            // textAlign={"center"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"20px"}
        >
            <Box>
                <span style={{fontFamily: "cursive" , fontSize: "45px"}}>+ </span>
            </Box>
            <Box>
                <Typography fontFamily={"nexa1"}>  {chiffre} </Typography>
                <Typography fontFamily={"unigeo3"}> {nom}</Typography>
            </Box>
        </Box>
    </Box>
}
export {CardAvantage,CardStat}
