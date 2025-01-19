// "use client";

// import React from "react";
// import { Box } from "@mui/material";

// const RightPanel: React.FC = () => {
//   return (
//     <Box
//       sx={{
//         bgcolor: "success.light",
//         p: 2,
//         height: "100%",
//         border: "1px solid black",
//       }}
//     >
//       Right Panel
//     </Box>
//   );
// };

// export default RightPanel;



"use client";

import React from "react";
import { Box } from "@mui/material";

const RightPanel: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "success.light",
        p: 2,
        height: "100%",
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Right Panel
    </Box>
  );
};

export default RightPanel;
