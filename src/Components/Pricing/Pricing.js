import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import PricingBox from "./PricingBox";

const Pricing = () => {
  return (
    <Box sx={{ height: "100vh", width: "85vw" }}>
      <Box
        sx={{
          //   border: "1px solid blue",
          height: "25vh",
          width: "85vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContentL: "center",
        }}
      >
        <Typography variant="h1" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Box>
      <Box
        sx={{
          //   border: "1px solid red",
          height: "70vh",
          width: "85vw",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <PricingBox
          title="Free Trial"
          price="Rs 00/mo"
          about="body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos  blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur "
          button="Get Started"
        />

        <PricingBox
          title="Monthly"
          price="Rs 250/year"
          about="body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos  blanditiis tenetur unde suscipit, quam beatae rerum inventore
         consectetur "
          button="Get Started"
        />

        <PricingBox
          title="Yearly"
          price="Rs 2500"
          about="body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos  blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur "
          button="Get Started"
        />
      </Box>
    </Box>
  );
};

export default Pricing;
