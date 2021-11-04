import React from 'react';
import Navbar from "../components/Navbar";
import HeroCard from "../components/HeroCard";
import Table from "../components/Table";
import GOOGL from "../Assets/GOOGL.png";
import FB from "../Assets/FB.png";
import AMZN from "../Assets/AMZN.svg";
import { Grid, Chip, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const View = () => {

  const columnData = [
    {
      title: "COMPANY NAME",
      field: "description",
    },

    {
      title: "SYMBOL",
      field: "displaySymbol",

      render: ({ displaySymbol }) => {
        return (
          <Chip
            style={{
              color: "#3498DB",
              backgroundColor: "#D5DBDB",
              padding: '5px 10px',
              fontWeight: "bold",
            }}
            label={displaySymbol}
            size="small"
          />
        );
      },
    },
    {
      title: "CURRENCY",
      field: "type",
    },

    {
      render: () => {
        return (
          <Button
            variant="contained"
            style={{
              backgroundColor: "#3498DB",
              color: "white",
            }}
            size="small"
          >
            Delete
          </Button>
        );
      },
    },

    {
      title: "TYPE",
      field: "type",
    },
  ];

  return (
    <div>
      <Navbar />

      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: '30px 0px'
        }}
      >
        <div className="cardHero">
          <Grid item xs={12} md={4}>
            <HeroCard img={GOOGL} title={"GOOGL"} value={"1515 USD"} />
          </Grid>
        </div>
        <div className="cardHero">
          <Grid item xs={12} md={4}>
            <HeroCard img={FB} title={"FB"} value={"266 USD"} />
          </Grid>
        </div>
        <div className="cardHero">
          <Grid item xs={12} md={4}>
            <HeroCard img={AMZN} title={"AMZN"} value={"3116 USD"} />
          </Grid>
        </div>
      </Grid>

      <div className="tableCss">
        <Table columnData={columnData} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#6D5BD0",
              color: "white",
            }}
          >
            Back
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default View;
