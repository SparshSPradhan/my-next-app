
// "use client";

// import React from "react";
// import { Box, Drawer, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";

// const drawerWidth = 200; // Adjusted width

// const DrawerMenu: React.FC = () => {
//   const drawer = (
//     <Box>
//       <Toolbar>
//         <Typography variant="h6">Menu</Typography>
//       </Toolbar>
//       <List>
//         {[
//           { text: "Home", link: "/" },
//           { text: "About", link: "/about" },
//           { text: "Services", link: "/services" },
//           { text: "Contact", link: "/contact" },
//         ].map((item) => (
//           <ListItem button key={item.text} component="a" href={item.link} target="_blank" rel="noopener noreferrer">
//             <ListItemText primary={item.text} />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <Drawer
//       variant="permanent" // Permanent for larger screens
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: drawerWidth,
//           height: "50vh", // Half the height of the screen
//           boxSizing: "border-box",
//         },
//         display: { xs: "none", sm: "block" },
//       }}
//     >
//       {drawer}
//     </Drawer>
//   );
// };

// export default DrawerMenu;


"use client";

import React from "react";
import { Box, Drawer, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";

const drawerWidth = 200; // Adjust width as needed

const DrawerMenu: React.FC = () => {
  const drawer = (
    <Box>
      <Toolbar>
        <Typography variant="h6">Menu</Typography>
      </Toolbar>
      <List>
        {[
          { text: "Home", link: "/" },
          { text: "About", link: "/about" },
          { text: "Services", link: "/services" },
          { text: "Contact", link: "/contact" },
        ].map((item) => (
          <ListItem button key={item.text} component="a" href={item.link} target="_blank" rel="noopener noreferrer">
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          height: "50vh", // Adjusted height to avoid overlapping footer
          boxSizing: "border-box",
        },
        display: { xs: "none", sm: "block" }, // Hide on smaller screens
      }}
    >
      {drawer}
    </Drawer>
  );
};

export default DrawerMenu;
