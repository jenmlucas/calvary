import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import teaching from "../assets/documents/calvaryTeaches.pdf";
import doctrine from "../assets/documents/doctrinalStatement.pdf"



const useStyles = makeStyles({
  mission: {
    textAlign: "center",
    fontSize: "50px",
  },
  title: {
    textAlign: "center",
    fontSize: "40px",
    marginTop: 30
  },
  body: {
    fontSize: "30px",
    marginTop: 30
  },
  beliefUl: {
    textAlign: "center",
    marginTop: 30,
    fontSize: "20px",
  },
  beliefLi: {
    marginBottom: 20,
    textAlign: "left",
  },
  calvaryTeachesButton: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: 80
  }
});

export default function Beliefs() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.mission}>
        Our Mission: Reaching the Lost, Discipling the Found, Sending the Strong
      </Typography>
      <Typography>
      <Typography className={classes.title}> Our Beliefs </Typography>
        <div className={classes.body}>
          Calvary Chapel has been formed as a fellowship of believers in the
          Lordship of Jesus Christ. Our desire is to know Christ and to be
          conformed to His image by the Power of the Holy Spirit. We are not a
          denominational church but do not oppose denominations as such, only
          the over-emphasis of the doctrinal differences that have lead to the
          division and the watered-down beliefs of the Body of Christ.
        </div>
        <ul className={classes.beliefUl}>
          <li className={classes.beliefLi}>
            WE BELIEVE that the only true basis of Christian fellowship is the
            Love of Christ, which is greater than any differences we have, and
            without His Love, we have no right to claim ourselves as Christians.
          </li>
          <li className={classes.beliefLi}>
            WE BELIEVE worship of God should be Spiritual.
          </li>
          <li className={classes.beliefLi}>
            WE BELIEVE worship of God should be Inspirational.
          </li>
          <li className={classes.beliefLi}>
            WE BELIEVE worship of God should be Intelligent. WE BELIEVE worship
            of God is Fruitful.
          </li>
        </ul>
      </Typography>
      <div className={classes.calvaryTeachesButton}>
      <Button variant="contained" size="large" href={teaching} target="_blank">
             What Calvary Teaches
      </Button>
      <Button variant="contained" size="large" href={doctrine} target="_blank">
            Calvary Chapel Doctrinal Statement
      </Button>
      </div>
    </div>
  );
}
