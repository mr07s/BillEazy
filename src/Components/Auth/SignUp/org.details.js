import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function OrgDetails(props) {
  const navigate = useNavigate();
  const {
    logo,
    setLogo,
    companyName,
    setCompanyName,
    companyEmail,
    setCompanyEmail,
    mobile,
    setMobile,
    address,
    setAddress,
    pin,
    setPin,
    gstin,
    setGstin,
    bankName,
    setBankName,
    accountHolder,
    setAccountHolder,
    ifsc,
    setIfsc,
    accountNumber,
    setAccountNumber,
    branchName,
    setBranchName,
    value,
    setValue,
  } = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        height: "100%",
        width: "100%",
        // border: "1px solid red",
      }}
    >
      <Box
        sx={{
          color: "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          // border: "1px solid red",
        }}
      >
        <Typography variant="h5">Organisation Details</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            // marginTop: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // border: "1px solid red",
            }}
          >
            <TextField
              // fullWidth={true}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              margin="normal"
              required
              type="text"
              color="primary"
              placeholder="Enter your Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <TextField
              // fullWidth={true}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              margin="normal"
              required
              type="email"
              color="primary"
              placeholder="Enter your email"
              value={companyEmail}
              onChange={(e) => setCompanyEmail(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // border: "1px solid red",
            }}
          >
            <TextField
              // fullWidth={true}
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
              color="primary"
              type="number"
              required
              placeholder="Enter your Mobile No."
              // sx={{ marginTop: "1rem" }}
              margin="normal"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <TextField
              label="GST No"
              variant="outlined"
              margin="normal"
              // sx={{ width: "29vw" }}
              value={gstin}
              onChange={(e) => setGstin(e.target.value)}
            />
          </Box>
          <TextField
            multiline
            rows={6}
            fullWidth
            margin="normal"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            label="Address"
            variant="outlined"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              label="Pincode"
              variant="outlined"
              margin="normal"
              // sx={{ width: "19vw" }}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />

            <TextField
              label="Bank Name"
              variant="outlined"
              margin="normal"
              // sx={{ width: "16vw" }}
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              label="Account Holder"
              variant="outlined"
              margin="normal"
              // sx={{ width: "17vw" }}
              value={accountHolder}
              onChange={(e) => setAccountHolder(e.target.value)}
            />
            <TextField
              label="IFSC"
              variant="outlined"
              value={ifsc}
              margin="normal"
              onChange={(e) => setIfsc(e.target.value)}
              //   sx={{ width: "29vw" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              label="Account Number"
              variant="outlined"
              margin="normal"
              // sx={{ width: "45%" }}
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
            <TextField
              label="Branch Name"
              variant="outlined"
              margin="normal"
              // sx={{ width: "53.5%" }}
              value={branchName}
              onChange={(e) => setBranchName(e.target.value)}
            />
          </Box>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
            <Button
              variant="contained"
              sx={{ background: "#073259", mt: 3 }}
              disabled={
                !(
                  companyName &&
                  companyEmail &&
                  mobile &&
                  address &&
                  pin &&
                  gstin &&
                  bankName &&
                  accountHolder &&
                  accountNumber &&
                  ifsc &&
                  branchName
                )
              }
              onClick={() => {
                setValue("3");
              }}
            >
              Save and Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
