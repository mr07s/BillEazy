import { Box, Button, Divider, TextField } from "@mui/material";
import React from "react";

const Details = () => {
  return (
    <Box sx={{ height: "auto", width: "100%", border: "1px solid red" }}>
      <Divider textAlign="left" sx={{ color: "#073259" }}>
        Organisation Details
      </Divider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "60%",
          // border: "1px solid black",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            // border: "1px solid red",
            display: "flex",
            flexDirection: "column",
            width: "40%",
            // height: "80%",
            justifyContent: "space-evenly",
          }}
        >
          <TextField label="Name" variant="outlined" />
          <TextField label="Email" variant="outlined" />
          <TextField label="Mobile" variant="outlined" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "56%",
            // border: "1px solid blue",
            alignItems: "center",
            height: "27vh",
          }}
        >
          <TextField
            multiline
            rows={6}
            fullWidth
            label="Address"
            variant="outlined"
          />
        </Box>
      </Box>
      <Box
        sx={{
          border: "1px solid red",
          height: "10vh",
          width: "50vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
        }}
      >
        <TextField label="Pincode" variant="outlined" sx={{ width: "19vw" }} />
        <TextField label="GST No" variant="outlined" sx={{ width: "29vw" }} />
      </Box>
      <Divider textAlign="right" sx={{ color: "#073259" }}>
        Bank Details
      </Divider>
      <Box>
        <Box
          sx={{
            // border: "1px solid red",
            height: "9vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <TextField
            label="Bank Name"
            variant="outlined"
            sx={{ width: "16vw" }}
          />
          <TextField
            label="Account Holder"
            variant="outlined"
            sx={{ width: "17vw" }}
          />
          <TextField
            label="IFSC"
            variant="outlined"
            //   sx={{ width: "29vw" }}
          />
        </Box>
        <Box
          sx={{
            // border: "1px solid red",
            height: "9vh",
            width: "50vw",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              // border: "1px solid blue",
              height: "9vh",
              width: "96.5%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TextField
              label="Account Number"
              variant="outlined"
              sx={{ width: "45%" }}
            />
            <TextField
              label="Branch Name"
              variant="outlined"
              sx={{ width: "53.5%" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            // border: "1px solid red",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            mt: "1.5rem",
          }}
        >
          <Button
            variant="contained"
            sx={{ background: "#073259", mr: "5rem", width: "20%" }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
