// "use client";

// import React from "react";
// import { Box, Typography, Container } from "@mui/material";

// const Footer: React.FC = () => {
//   return (
//     <Box
//       sx={{
//         bgcolor: "primary.dark",
//         color: "white",
//         padding: "20px 0",
//         marginTop: "auto", // Ensures footer stays at the bottom of the screen
//       }}
//     >
//       <Container maxWidth="lg" sx={{ textAlign: "center" }}>
//         <Typography variant="body2">© {new Date().getFullYear()} My Company. All rights reserved.</Typography>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;






// "use client";

// import React from "react";
// import { Box, Typography, Container } from "@mui/material";

// const Footer: React.FC = () => {
//   return (
//     <Box
//       sx={{
//         bgcolor: "primary.dark",
//         color: "white",
//         padding: "20px 0",
//         width: "100%", // Ensures it spans the entire width
//         position: "relative", // Ensures the footer stays at the bottom
//         bottom: 0,
        
//       }}
//     >
//       <Container maxWidth="lg" sx={{ textAlign: "center" }}>
//         <Typography variant="body2">© {new Date().getFullYear()} My Company. All rights reserved.</Typography>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;




"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.dark",
        color: "white",
        padding: "20px 0",
        width: "100%", // Ensures it spans the entire width
        position: "relative", // Ensures the footer stays at the bottom of the screen
        bottom: 0,
        marginTop: "auto", // Ensures footer stays at the bottom
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography variant="body2">© {new Date().getFullYear()} My Company. All rights reserved.</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
