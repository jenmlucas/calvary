import React, { useState } from "react";
import hero from "../../assets/images/hero.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
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
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
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
            <Link to="/ministries" style={{ textDecoration: "none", color: "white" }}>
            <Button variant="h4" component="div" sx={{ flexGrow: 5 }}>
              Ministries
            </Button>
            </Link>
            <Button variant="h4" component="div" sx={{ flexGrow: 5 }}>
              Support Us
            </Button>
            <Button variant="h4" component="div" sx={{ flexGrow: 5 }}>
              Sermons
            </Button>
            <Link
              to="/services"
              style={{ textDecoration: "none", color: "white" }}
            >
            <Button variant="h4" component="div" sx={{ flexGrow: 5 }}>
              Contact
            </Button>
            </Link>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "white" }}
            >
            <Button variant="h4" component="div" sx={{ flexGrow: 5 }}>
              Pastors
            </Button>
            </Link>
            <img src={hero} alt="hero" width="auto" />
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
