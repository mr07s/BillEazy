import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

const ViewBankDetails = () => {
  const bankData = useSelector((state) => state.BankReducer);
  console.log(bankData);
  return (
    <>
      <Box
        sx={{
          // border: "1px solid red",
          height: "fit-content",
          display: "flex",
          ml: "1rem",
          my: "1rem",
          flexDirection: "column",
        }}
      >
        {bankData?.data?.accountHolderName && (
          <Typography variant="subtitle1">
            Account Holder: {bankData.data?.accountHolderName}
          </Typography>
        )}
        {bankData?.data?.accountNumber && (
          <Typography variant="subtitle1">
            Account Number: {bankData?.data?.accountNumber}
          </Typography>
        )}
        {bankData?.data?.ifscNumber && (
          <Typography variant="subtitle1">
            Ifsc Number: {bankData?.data?.ifscNumber}
          </Typography>
        )}
        {bankData?.data?.bankName && (
          <Typography variant="subtitle1">
            Bank Name: {bankData?.data?.bankName}
          </Typography>
        )}
        {bankData?.data?.branchName && (
          <Typography variant="subtitle1">
            Branch Name: {bankData?.data?.branchName}
          </Typography>
        )}
      </Box>
    </>
  );
};

export default ViewBankDetails;
