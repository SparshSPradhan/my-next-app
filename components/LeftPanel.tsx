// "use client";

// import React from "react";
// import { Box } from "@mui/material";

// const LeftPanel: React.FC = () => {
//   return (
//     <Box
//       sx={{
//         bgcolor: "primary.light",
//         p: 2,
//         height: "100%",
//         border: "1px solid black",
//       }}
//     >
//       Left Panel
//     </Box>
//   );
// };

// export default LeftPanel;



"use client";

import React from "react";
import { Box } from "@mui/material";

const LeftPanel: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.light",
        p: 2,
        height: "100%",
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Left Panel
    </Box>
  );
};

export default LeftPanel;
