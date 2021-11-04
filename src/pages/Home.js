import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import HeroCard from "../components/HeroCard";
import Table from "../components/Table";
import GOOGL from "../Assets/GOOGL.png";
import FB from "../Assets/FB.png";
import AMZN from "../Assets/AMZN.svg";
import { Grid, Chip, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Home = () => {
  const [apidata, setApidata] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(
      "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=c1atgkn48v6rcdq9scsg"
    );
    setApidata(res);
  };

  const tableData = [];
  apidata && apidata.data.map((data) => {
    let formData = {};
    formData = {
      description: data.description,
      displaySymbol: data.displaySymbol,
      currency: data.currency,
      type: data.type,
    };

    tableData.push(formData);
  });

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
      field: "currency",
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
            Save Data
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
        <Table columnData={columnData} tableData={tableData} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: '20px 0px',
        }}
      >
        <Link to="/view" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#3498DB",
              color: "white",
            }}
          >
            View Saved Data
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;