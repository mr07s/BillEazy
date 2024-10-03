import { Box, Typography } from "@mui/material";
import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const NotFound = () => {
  return (
    <Box
      sx={{
        // border: "1px solid red",
        height: "100vh",
        width: "85vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#073259",
      }}
    >
      <Box
        sx={{
          //   border: "1px solid blue",
          height: "70vh",
          width: "40vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            // border: "1px solid red",
            height: "20vh",
            width: "40vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SentimentVeryDissatisfiedIcon
            sx={{
              height: "20vh",
              width: "20vw",
            }}
          />
        </Box>
        <Box
          sx={{
            // border: "1px solid black",
            height: "20vh",
            width: "40vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2">404</Typography>
          <Typography variant="h3">Page Not Found</Typography>
        </Box>
        <Box sx={{ height: "20vh", width: "40vw" }}>
          <Typography align="center" variant="h5">
            The requested URL /doesntexist was not found on this server. That's
            all we know.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NotFound;
