import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function LoadingPage() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid red",
        height: "100vh",
        width: "85vw",
        color: "#073259",
      }}
    >
      <CircularProgress size="3rem" sx={{ color: "#073259" }} />
    </Box>
  );
}
