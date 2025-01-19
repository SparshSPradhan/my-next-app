


// "use client";

// import React from "react";
// import { Box, Drawer, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";

// const drawerWidth = 240;

// interface DrawerMenuProps {
//   mobileOpen: boolean;
//   handleDrawerToggle: () => void;
// }

// const DrawerMenu: React.FC<DrawerMenuProps> = ({ mobileOpen, handleDrawerToggle }) => {
//   const drawer = (
//     <Box>
//       <Toolbar>
//         <Typography variant="h6">Menu</Typography>
//       </Toolbar>
//       <List>
//         {["Home", "About", "Services", "Contact"].map((text) => (
//           <ListItem button key={text}>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <Drawer
//       variant="permanent" // Make it permanent for larger screens
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: drawerWidth,
//           boxSizing: "border-box",
//         },
//         display: { xs: "none", sm: "block" }, // Hide on mobile
//       }}
//     >
//       {drawer}
//     </Drawer>
//   );
// };

// export default DrawerMenu;




// "use client";

// import React from "react";
// import { Box, Drawer, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";

// const drawerWidth = 240;

// interface DrawerMenuProps {
//   mobileOpen: boolean;
//   handleDrawerToggle: () => void;
// }

// const DrawerMenu: React.FC<DrawerMenuProps> = ({ mobileOpen, handleDrawerToggle }) => {
//   const drawer = (
//     <Box>
//       <Toolbar>
//         <Typography variant="h6">Menu</Typography>
//       </Toolbar>
//       <List>
//         {[
//           { text: "Home", href: "/" },
//           { text: "About", href: "/about" },
//           { text: "Services", href: "/services" },
//           { text: "Contact", href: "/contact" },
//         ].map((item) => (
//           <a
//             key={item.text}
//             href={item.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ textDecoration: "none", color: "inherit" }} // Preserve MUI styling
//           >
//             <ListItem button>
//               <ListItemText primary={item.text} />
//             </ListItem>
//           </a>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: drawerWidth,
//           boxSizing: "border-box",
//           height: "50vh", // Set height to half the viewport height
//           top: 0, // Position it at the top
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

const drawerWidth = 180; // Set a smaller width

interface DrawerMenuProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ mobileOpen, handleDrawerToggle }) => {
  const drawer = (
    <Box>
      <Toolbar>
        <Typography variant="h6">Menu</Typography>
      </Toolbar>
      <List>
        {[
          { text: "Home", href: "/" },
          { text: "About", href: "/about" },
          { text: "Services", href: "/services" },
          { text: "Contact", href: "/contact" },
        ].map((item) => (
          <a
            key={item.text}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }} // Preserve MUI styling
          >
            <ListItem button>
              <ListItemText primary={item.text} />
            </ListItem>
          </a>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth, // Reduced width
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth, // Reduced width for the paper
          boxSizing: "border-box",
          height: "50vh", // Optional: keep the height change from the earlier example
          top: 0,
        },
        display: { xs: "none", sm: "block" },
      }}
    >
      {drawer}
    </Drawer>
  );
};

export default DrawerMenu;
