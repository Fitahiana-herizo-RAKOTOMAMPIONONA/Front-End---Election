import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
        sx={{
            width:"100%",
            height:"200px",
            display:"grid",
            // background: "var(--second)",
            gridTemplateColumns: "1fr 1fr 1fr",
            color: "var(--claire)",
            textAlign: "center",
            padding:"20px",
            margin:"0"
        }}   
    >
        <Box>
            <Typography 
                    fontWeight="600"
                    fontSize="20"
                    // color="var(--primary)"
                    marginBottom="20px"
                >
                    Navigation
                </Typography>
                <Typography>Accueil</Typography>
                <Typography>Solution</Typography>
                <Typography>Vote</Typography>
                <Typography>Regle</Typography>
                <Typography>A propos</Typography>
            </Box>
       <Box>
            <Typography 
                fontWeight="600"
                fontSize="20"
                // color="var(--primary)"
                marginBottom="20px"
            >
                Navigation
            </Typography>
            <Typography>Accueil</Typography>
            <Typography>Solution</Typography>
            <Typography>Vote</Typography>
            <Typography>Regle</Typography>
            <Typography>A propos</Typography>
        </Box>
        <Box>
            <Typography 
                fontWeight="600"
                fontSize="20"
                // color="var(--primary)"
                marginBottom="20px"
            >
                Navigation
            </Typography>
            <Typography>Accueil</Typography>
            <Typography>Solution</Typography>
            <Typography>Vote</Typography>
            <Typography>Regle</Typography>
            <Typography>A propos</Typography>
        </Box>
    </Box>
  );
}

export default Footer;
