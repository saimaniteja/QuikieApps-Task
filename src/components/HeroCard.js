import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    width: 300,
    height: 200,
  }
});

const HeroCard = ({ img, title, value }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <h3 style={{ fontSize: "25px" }}>{title}</h3>
        <img src={img} style={{ height: "70px", width: "70px" }} alt='' />
      </div>

      <div>
        <h1 style={{ textAlign: "center", marginTop: '20px' }}>{value}</h1>
      </div>
    </Card>
  );
};

export default HeroCard;