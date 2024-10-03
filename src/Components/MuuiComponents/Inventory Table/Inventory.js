import { Box } from "@mui/material";
import React from "react";
import InfoTable from "./Info.Table";

const Inventory = () => {
  return (
    <Box
      sx={{
        // border: "1px solid red",
        height: "100vh",
        width: "85vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box sx={{ height: "10%", width: "95%" }}>add medicine</Box>
      <Box sx={{ height: "80%", width: "95%" }}>
        <InfoTable />
      </Box>
    </Box>
  );
};

export default Inventory;
