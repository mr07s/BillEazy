import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PricingBox = (props) => {
  const navigate = useNavigate();

  return (
    <Paper
      elevation={20}
      sx={{
        // border: "2px solid #073259",
        height: "50vh",
        width: "20vw",
        borderRadius: "5px",
        boxShadow: 5,
      }}
    >
      <Box
        sx={{
          background: "#073259",
          borderRadius: "5px",
          color: "white",
          height: "10vh",
          width: "20vw",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            height: "10vh",
            width: "20vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {props.title}
        </Typography>
      </Box>
      <Box sx={{ height: "10vh", width: "20vw" }}>
        <Typography
          align="center"
          variant="h3"
          gutterBottom
          sx={{
            height: "10vh",
            width: "20vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // textAlign: "center",
          }}
        >
          {props.price}
        </Typography>
      </Box>
      <Box sx={{ height: "20vh", width: "20vw" }}>
        <Typography
          variant="subtitle1"
          align="center"
          gutterBottom
          sx={{
            // border: "1px solid red",
            height: "20vh",
            width: "20vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {props.about}
        </Typography>
        <Box
          sx={{
            // border: "1px solid red",
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "15vw",
              background: "#073259",
            }}
            onClick={() => navigate("/PricingPayment")}
          >
            {props.button}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default PricingBox;
