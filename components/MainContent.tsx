// "use client";

// import React from "react";
// import { Box } from "@mui/material";

// const MainContent: React.FC = () => {
//   return (
//     <Box
//       sx={{
//         bgcolor: "secondary.light",
//         p: 2,
//         height: "100%",
//         border: "1px solid black",
//       }}
//     >
//       Main Content
//     </Box>
//   );
// };

// export default MainContent;



"use client";

import React from "react";
import { Box } from "@mui/material";

const MainContent: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "secondary.light",
        p: 2,
        height: "100%",
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Main Content
    </Box>
  );
};

export default MainContent;
