import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#A19472" : "#ffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.black,
  marginTop: "20px",
  boxShadow: "10px 10px 5px 12px lightblue",
  marginLeft: "20px",
  marginRight: "20px",
}));

const useStyles = makeStyles({});

export default function Ministries() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs={4}>
          <Item>
            <Typography>
              <h1> Mens Study</h1>
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
            <Typography>Monday Nights</Typography>
            <Typography>
              Dinner- 5:30 PM <br></br>
              Study- 6:30 PM
            </Typography>
            <Typography>Contact Info</Typography>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>
            <Typography>
              <h1> Women's Ministry</h1>
            </Typography>
            <Typography>Some Verse will go here</Typography>
            <Typography>Studies</Typography>
            <Typography>Grazing in the Word</Typography>
            <Typography>1st and 3rd Saturdays </Typography>
            <Typography>9 AM</Typography>
            <Typography>Tuesday Nights</Typography>
            <Typography>7 PM </Typography>
            <Typography>Contact Info</Typography>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>
            <Typography>
              <h1> Transformed</h1>
            </Typography>
            <Typography>Jr High and High School</Typography>
            <Typography>
              12 I beseech you therefore, brethren, by the mercies of God, that
              you present your bodies a living sacrifice, holy, acceptable to
              God, which is your reasonable service. 2 And do not be conformed
              to this world, but be transformed by the renewing of your mind,
              that you may prove what is that good and acceptable and perfect
              will of God.- Romans 12:1-2
            </Typography>
            <Typography>Sundays- 10 AM</Typography>
            <Typography>Contact Info</Typography>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>
            <Typography>
              <h1> Kids Ministry </h1>
            </Typography>
            <Typography>Some Verse</Typography>
            <Typography>Sundays</Typography>
            <Typography>10 AM</Typography>
            <Typography>Wednesdays</Typography>
            <Typography>7 PM</Typography>
            <Button>Child Sign Up</Button>
            <Button>Volunteer</Button>
            <Typography>Contact Info</Typography>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>
            <Typography>
              <h1> Church Clean Up </h1>
            </Typography>
            <Typography>Some Verse</Typography>
            <Typography>Sundays</Typography>
            <Typography>10 AM</Typography>
            <Typography>Wednesdays</Typography>
            <Typography>7 PM</Typography>
            <Button>Child Sign Up</Button>
            <Button>Volunteer</Button>
            <Typography>Contact Info</Typography>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
