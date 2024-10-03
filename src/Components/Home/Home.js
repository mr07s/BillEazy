import React from "react";
import "./Home.css";
import HomeCard from "./HomeCard.js";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Home = () => {
  return (
    <div className="home">
      <div className="list__container">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        {/* <Button
          startIcon={<AddIcon fontSize="large" />}
          className="addOption"
          // onClick={() => dispatch(openSendMessage())}
        >
          Add Option
        </Button> */}
      </div>
    </div>
  );
};

export default Home;
