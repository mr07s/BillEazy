import { Box } from "@mui/material";
import React from "react";
import DataChart from "./DataChart";
import Details from "./Details";
import AllDetails from "../Auth/SignUp/All.Details";

const Account = () => {
  return (
    <Box
      sx={{
        // border: "1px solid red",
        height: "auto",
        width: "85vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <AllDetails />

      {/* <DataChart /> */}
    </Box>
  );
};

export default Account;
