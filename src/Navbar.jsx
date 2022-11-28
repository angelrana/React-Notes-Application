import React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



const Navbar = () => {
      const [value, setValue] = React.useState("one");

      const handleChange = (event, newValue) => {
        setValue(newValue);
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ pl: 3, pr: 3, pt: 1, bgcolor: "white" }}>
        <Toolbar>
          <Box sx={{ width: "45%" }}>
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
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ ml: "auto", mr: 5 }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar
