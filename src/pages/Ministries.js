import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#A19472" : "#fffff2",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.black,
  marginTop: "20px",
  boxShadow: "10px 10px 5px 12px lightblue",
  marginLeft: "20px",
  marginRight: "20px",
  maxHeight: 450,
  minHeight: 470,
  borderRadius: "50px"
}));

const useStyles = makeStyles({
    buttons: {
        marginTop: 180,
    },
    leftButton: {
        marginRight: 250  
    }, 
    text: {
        marginTop: 10
    },
    title: {
        fontWeight: "bold",
        marginTop: 10,
        textDecoration: "underline"
    },
    subTitle: {
        fontWeight: "bold",
        marginTop: 10,
    }
});

export default function Ministries() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs={4}>
          <Item>
            <Typography>
              <h1> Mens Ministry</h1>
            </Typography>
            <Typography>
              Like a wheel, God has chosen and placed men to be the hub, the
              central part of our families, churches and workforce. Ephesians
              4:11-12 States that God gave some to be apostles, some prophets,
              some evangelists, and some pastors and teachers, for the equipping
              of the saints for the work of ministry and for the edifying of the
              body of Christ. Men meet together to become equipped for the
              service of Christ and to receive encouragement and prayer support
              as we engage in His service. This is accomplished by studying and
              making practical application of His word in our lives and the
              world around us. That we would, Watch, stand fast in the faith, be
              brave, be strong. Let all that you do be done with love. 1st
              Corinthians 16:13
            </Typography>
            <Typography className={classes.title}>Monday Nights</Typography>
            <Typography className={classes.text}>
              Dinner- 5:30 PM <br></br>
              Study- 6:30 PM
            </Typography>
            <Typography className={classes.text}>Contact Info</Typography>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>
            <Typography>
              <h1> Women's Ministry</h1>
            </Typography>
            <Typography>Some Verse should go here</Typography>
            <Typography className={classes.title}>Studies</Typography>
            <Typography className={classes.subTitle}>Grazing in the Word</Typography>
            <Typography className={classes.text}>1st and 3rd Saturdays </Typography>
            <Typography className={classes.text}>9 AM</Typography>
            <Typography className={classes.subTitle}>Tuesday Nights</Typography>
            <Typography className={classes.text}>7 PM </Typography>
            <Typography className={classes.text}>Contact Info</Typography>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>
            <Typography>
              <h1> Transformed</h1>
              <h2>Jr High and High School</h2>
            </Typography>
            <Typography>
              12 I beseech you therefore, brethren, by the mercies of God, that
              you present your bodies a living sacrifice, holy, acceptable to
              God, which is your reasonable service. 2 And do not be conformed
              to this world, but be transformed by the renewing of your mind,
              that you may prove what is that good and acceptable and perfect
              will of God.- Romans 12:1-2
            </Typography>
            <Typography className={classes.title}>Sundays</Typography>
            <Typography className={classes.text}> 10 AM</Typography>
            <Typography className={classes.text}>Contact Info</Typography>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>
            <Typography>
              <h1> Kids </h1>
            </Typography>
            <Typography>Some Verse should go here</Typography>
            <Typography  className={classes.title}>Sundays</Typography>
            <Typography className={classes.text} >10 AM</Typography>
            <Typography  className={classes.title}>Wednesdays</Typography>
            <Typography className={classes.text}>7 PM</Typography>
            <Typography className={classes.text}>Please Find Linda or Debbie with questions</Typography>
            <div className={classes.buttons}>
            <Button className={classes.leftButton}>Child Sign Up</Button>
            <Button>Volunteers</Button>
            </div>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>
            <Typography>
              <h1> Church Clean Up </h1>
            </Typography>
            <Typography>Some Verse should go here</Typography>
            <Typography>Saturdays</Typography>
            <Typography>9 AM</Typography>
            <Typography>contact</Typography>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
