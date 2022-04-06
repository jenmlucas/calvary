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
// import SecondMenu from "@mui/material/Menu";
// import SecondMenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import calvary from "../../assets/images/calvary.png";

export default function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const [anchorElSecond, setAnchorElSecond] = useState(null);
  // const openSecond = Boolean(anchorElSecond);
  // const handleClickSecond = (event) => {
  //   setAnchorElSecond(event.currentTarget);
  // };
  // const handleCloseSecond = () => {
  //   setAnchorElSecond(null);
  // };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <img src={calvary} height="150px" />
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 5 }}
            textAlign="center"
          >
            Calvary Chapel Saving Grace <br></br> Mesa
          </Typography>
          <Grid textAlign={"center"}>
            <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
              <Button variant="h4" component="div" sx={{ flexGrow: 5 }}>
                Home
              </Button>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button variant="h4" component="div" sx={{ flexGrow: 5 }}>
                About Us
              </Button>
            </Link>
            {/* <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            > */}
            {/* <Link
                to="/beliefs"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleClose}>Our Beliefs</MenuItem>
              </Link> */}
            {/* <MenuItem onClick={handleClose}>
                What is Calvary Teaching
              </MenuItem> */}
            {/* <MenuItem onClick={handleClose}>
                Calvary Chapel Doctrinal Statement
              </MenuItem>
            </Menu>
            <Button variant="h4" component="div" sx={{ flexGrow: 5 }}>
              Know Jesus
            </Button> */}
            <Button
              variant="h4"
              component="div"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Ministries
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
              <MenuItem onClick={handleClose}>
                Men's Ministry
              </MenuItem>
              <MenuItem onClick={handleClose}>
                Women's Ministry
              </MenuItem>
              <MenuItem onClick={handleClose}>
                Transformed- Jr High/High School
              </MenuItem>
              <MenuItem onClick={handleClose}>
                Calvary Kidz
              </MenuItem>
            </Menu>
            <Button variant="h4" component="div" sx={{ flexGrow: 5 }}>
              Support Us
            </Button>
            <Button variant="h4" component="div" sx={{ flexGrow: 5 }}>
              Sermons
            </Button>
            <Button variant="h4" component="div" sx={{ flexGrow: 5 }}>
              Service Times
            </Button>
            <img src={hero} alt="hero" width="auto" />
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
