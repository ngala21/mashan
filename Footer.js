import { Box, Typography } from "@mui/material";
import React from "react";
import zuri from "./images/zuri_internship.jpeg";
import Ingressive from "./images/Ingressive4Good.png";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: { sm: "space-between" },

      }}
    >
    <img src={zuri} alt="HNG_Internship" width="150" height="90" />
      <Box sx={{ display: "flex", alignItems: "center", marginLeft: 1}}>
       <Typography variant="p">HNG Internship 9 Frontend Task</Typography>
      </Box>
      <Box sx={{marginTop: 3}}>
        <img src={Ingressive} alt="HNG_Internship" width="100" height="40"/>
      </Box>
    </Box>
  );
};

export default Footer;
