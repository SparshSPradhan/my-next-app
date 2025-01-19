// "use client";

// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Box,
//   InputBase,
//   Avatar,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";

// interface AppHeaderProps {
//   handleDrawerToggle: () => void;
// }

// const AppHeader: React.FC<AppHeaderProps> = ({ handleDrawerToggle }) => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

//   return (
//     <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//         {/* Left: Menu Icon and Brand Name */}
//         <Box display="flex" alignItems="center">
//           {isSmallScreen && (
//             <IconButton
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               onClick={handleDrawerToggle}
//             >
//               <MenuIcon />
//             </IconButton>
//           )}
//           <Typography variant="h6" noWrap>
//             Brand Name
//           </Typography>
//         </Box>

//         {/* Middle: Search Bar */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             backgroundColor: "white",
//             borderRadius: 1,
//             width: isSmallScreen ? "60%" : "40%",
//           }}
//         >
//           <SearchIcon sx={{ marginX: 1, color: "gray" }} />
//           <InputBase
//             placeholder="Search..."
//             inputProps={{ "aria-label": "search" }}
//             sx={{ width: "100%" }}
//           />
//         </Box>

//         {/* Right: Avatar */}
//         <Avatar
//           alt="Profile Picture"
//           src="https://via.placeholder.com/150"
//           sx={{ marginLeft: 2, width: 40, height: 40 }}
//         />
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default AppHeader;




"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  InputBase,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

interface AppHeaderProps {
  handleDrawerToggle: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ handleDrawerToggle }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left: Menu Icon and Brand Name */}
        <Box display="flex" alignItems="center">
          {isSmallScreen && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap>
            Brand Name
          </Typography>
        </Box>

        {/* Middle: Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 1,
            width: isSmallScreen ? "60%" : "40%",
          }}
        >
          <SearchIcon sx={{ marginX: 1, color: "gray" }} />
          <InputBase
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
            sx={{ width: "100%" }}
          />
        </Box>

        {/* Right: Profile Section */}
        <Box display="flex" alignItems="center" sx={{ marginLeft: 2 }}>
          <Typography variant="body1" sx={{ marginRight: 1, color: "white" }}>
            Sparsh S. Pradhan
          </Typography>
          <Avatar
            alt="Sparsh S. Pradhan"
            src="https://via.placeholder.com/150"
            sx={{ width: 40, height: 40 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;



