import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import qr from "../Assets/qr.jpeg";
import PricingBox from "./PricingBox";

export default function PricingPayment() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        "& > :not(style)": {
          //   m: 1,
          //   width: 128,
          //   height: 128,
        },
      }}
    >
      <Paper
        elevation={10}
        sx={{
          height: "50vh",
          width: "30vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          borderRadius: "10px",
        }}
      >
        <Typography
          align="center"
          sx={{ mt: "1rem", height: "10%", width: "100%" }}
        >
          To activate your plan Scan & Pay using this QR Code
        </Typography>

        <Box
          sx={{
            // border: "1px solid red",
            height: "80%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={qr} height={"60%"} width={"40%"} alt="" />
        </Box>
        {/* <Typography align="center" sx={{ height: "10%", width: "100%" }}>
          Total Amount
        </Typography> */}
      </Paper>
    </Box>
  );
}
