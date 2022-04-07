import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import calvary from "../../assets/images/calvary.png";

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: 'column',
        minHeight: "9vh"
      },
      footer: {
        backgroundColor: "#1976d2",
        textAlign: "center",
        width: "100%",
        position: "fixed",
        bottom: 0,
      },
});

export default function Footer() {
  const classes = useStyles();

  let newDate = new Date()
  let year = newDate.getFullYear();

  return (
    <footer className={classes.container}>
        <BottomNavigation
        sx={{ width: "auto", height: "auto" }}
        className={classes.footer}
      >
        <img src={calvary} height= "25px" />
    <Typography color="white">
        Calvary Chapel Saving Grace, All Rights Reserved. Copyright &copy; 2022-{year}
    </Typography>
    </BottomNavigation>
    </footer>
  );
}
