import React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styled from '@emotion/styled';
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Navbar = () => {
  const [value, setValue] = React.useState("one");
    const [open, setOpen] = React.useState(false);

      const handleChange = (event, newValue) => {
        setValue(newValue);
  };
  

   const handleDrawerOpen = () => {
     setOpen(true);
   };

   const handleDrawerClose = () => {
     setOpen(false);
   };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        open={open}
        position="static"
        sx={{ pl: 3, pr: 3, pt: 1, bgcolor: "white", boxShadow: "none" }}>
        <Toolbar>
          <Box sx={{ width: "47%", display: { xs: "none", sm: "flex" } }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example">
              <Tab value="one" label="WEEKLY" />
              <Tab value="two" label="DAILY" />
            </Tabs>
          </Box>

          <Typography
            sx={{
              position: "relative",
              display: { xs: "flex", md: "flex" },
              flexGrow: 1,
              fontFamily: "'Titillium Web', sans-serif",
              fontWeight: 700,
              letterSpacing: ".2rem",
              textDecoration: "none",
              textAlign: "center",
              color: "black",
              fontSize: "23px",
            }}>
            NOTES
          </Typography>

          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            size="large"
            edge="start"
            sx={{
              ml: "auto",
              mr: { xs: 0, sm: 0, md: 2 },
              ...(open && { display: "none" }),
            }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Box sx={{ width: "100%", display: { xs: "flex", sm: "none" } }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example">
            <Tab sx={{ fontSize: "11px" }} value="one" label="WEEKLY" />
            <Tab sx={{ fontSize: "11px" }} value="two" label="DAILY" />
          </Tabs>
        </Box>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
      </Drawer>
    </Box>
  );
}

export default Navbar
