import React, { useState } from "react";
import hero from "../../assets/images/hero.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SecondMenu from "@mui/material/Menu";
import SecondMenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";


export default function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElSecond, setAnchorElSecond] = useState(null);
  const openSecond = Boolean(anchorElSecond);
  const handleClickSecond = (event) => {
    setAnchorElSecond(event.currentTarget);
  };
  const handleCloseSecond = () => {
    setAnchorElSecond(null);
  };
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h2" component="div" sx={{ flexGrow: 5 }} textAlign="center">
            Calvary Chapel Saving Grace <br></br> Mesa
          </Typography>
          <Grid textAlign={"center"}> 
          <Link to="/home"  style={{ textDecoration: "none", color: "white" }}>
          <Button variant="h4" component="div" sx={{ flexGrow: 5 }}>
            Home
          </Button>
          </Link>
          <Button variant="h4" component="div" sx={{ flexGrow: 5 }}>
            Know Jesus
          </Button>
          <Button
            variant="h4"
            component="div"
            sx={{ flexGrow: 5 }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Im New
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link to="/beliefs" style={{ textDecoration: "none", color: "black"}}>
            <MenuItem onClick={handleClose} >Our Beliefs</MenuItem>
            </Link>
            <MenuItem onClick={handleClose}>What is Calvary Teaching</MenuItem>
            <MenuItem onClick={handleClose}>Calvary Chapel Doctrinal Statement</MenuItem>
          </Menu>
          <Button variant="h4" component="div"
          id="basic-button"
          aria-controls={openSecond ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openSecond ? "true" : undefined}
          onClick={handleClickSecond}
          >
            Ministries
          </Button>
          <SecondMenu
            id="basic-menu"
            anchorEl={anchorElSecond}
            open={openSecond}
            onClose={handleCloseSecond}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <SecondMenuItem onClick={handleCloseSecond}>Men's Ministry </SecondMenuItem>
            <SecondMenuItem onClick={handleCloseSecond}>Women's Ministry </SecondMenuItem>
            <SecondMenuItem onClick={handleCloseSecond}>Transformed- Jr High/High School </SecondMenuItem>
            <SecondMenuItem onClick={handleCloseSecond}> Calvary Kidz</SecondMenuItem>
          </SecondMenu>
          <Button variant="h4" component="div" sx={{ flexGrow: 5 }}>
            Support Us
          </Button>
          <Button variant="h4" component="div" sx={{ flexGrow: 5 }}>
            Sermons
          </Button>
          <Button variant="h4" component="div" sx={{ flexGrow: 5 }}>
            Service Times
          </Button>
           <img src={hero} alt="hero" width="auto"/>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
