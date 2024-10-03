import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

export default function TermsAndCondition({
  termsAndConditions,
  setTermsAndConditions,
}) {
  return (
    <Box
      //   component="form"
      sx={{
        height: "15rem",
        borderRadius: "5px",
        border: "1px solid #d9dbe9",
        marginTop: "1rem",
        marginBottom: "1rem",
        marginLeft: "0.5rem",
        width: "98%",
        border: "1px solid",
        // width: "85vh",

        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h5">Terms & Conditions</Typography>
      <Box
        sx={
          {
            //   border: "1px solid",
            // width: 500,
            // width: "85vh",
            // maxWidth: "100%",
          }
        }
      >
        <TextField
          id="outlined-basic"
          variant="standard"
          multiline
          value={termsAndConditions}
          onChange={(e) => setTermsAndConditions(e.target.value)}
          sx={{ width: "85vh" }}
        />
      </Box>
    </Box>
  );
}
