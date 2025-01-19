


"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import AppHeader from "../components/AppHeader";
import DrawerMenu from "../components/DrawerMenu";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

// const drawerWidth = 240;

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

//   Toggle the drawer (for mobile or smaller screens)
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* App Header */}
      <AppHeader handleDrawerToggle={handleDrawerToggle} />

      {/* Drawer Menu */}
      <DrawerMenu mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

      {/* Main Content with Left Panel, Center Content, and Right Panel */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",  // Center content horizontally
          flexGrow: 1,
          paddingTop: "80px", // Add padding to ensure content doesn't overlap header
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "70%", // Increase the width of the box for the content area (adjust this value)
            maxWidth: "1200px", // Optional: Set a max width for larger screens
            border: "1px solid #ddd", // Optional: Add border for better visibility
            boxShadow: 3, // Optional: Add shadow for aesthetics
            borderRadius: 2, // Optional: Add rounded corners
            backgroundColor: "#fff", // Optional: Set background color
            padding: 3, // Increase the padding to give more space around the content
            height: "calc(100vh - 80px)", // Adjust this height for content box
          }}
        >
          {/* Left Panel */}
          <LeftPanel />

          {/* Main Content */}
          <MainContent />

          {/* Right Panel */}
          <RightPanel />
        </Box>
      </Box>

      {/* Footer - This will always stay at the bottom */}
      <Footer />
    </Box>
  );
}









// "use client";

// import React, { useState } from "react";
// import { Box } from "@mui/material";
// import AppHeader from "../components/AppHeader";
// import DrawerMenu from "../components/DrawerMenu";
// import LeftPanel from "../components/LeftPanel";
// import RightPanel from "../components/RightPanel";
// import MainContent from "../components/MainContent";
// import Footer from "../components/Footer";

// const drawerWidth = 240;

// export default function Home() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   // Toggle the drawer (for mobile or smaller screens)
//   const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
//       {/* App Header */}
//       <AppHeader handleDrawerToggle={handleDrawerToggle} />

//       {/* Drawer Menu */}
//       <DrawerMenu mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

//       {/* Main Content with Left Panel, Center Content, and Right Panel */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "row", // Align content horizontally
//           flexGrow: 1,
//           paddingTop: "80px", // Add padding to ensure content doesn't overlap header
//           marginLeft: { xs: 0, sm: `${drawerWidth}px` }, // Push content to the right on larger screens
//           marginBottom: "80px", // Add margin to ensure footer is not hidden
//         }}
//       >
//         {/* Left Panel */}
//         <LeftPanel />

//         {/* Main Content */}
//         <MainContent />

//         {/* Right Panel */}
//         <RightPanel />
//       </Box>

//       {/* Footer - This will always stay at the bottom */}
//       <Footer />
//     </Box>
//   );
// }
