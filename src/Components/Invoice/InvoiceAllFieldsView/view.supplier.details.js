import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
// import Supplierdetails from "../Invoice.fields/Supplier.details";

const ViewSupplierDetails = () => {
  const { data } = useSelector((state) => state.SupplierReducer);
  const {
    firmName,
    companyAddress,
    companyGstin,
    companyEmail,
    companyPan,
    companyMobile,
    dlNo,
    city,
    state,
    pincode,
  } = data;
  console.log(data);
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
        {firmName && (
          <Typography variant="subtitle1">Firm Name: {firmName}</Typography>
        )}
        {companyEmail && (
          <Typography variant="subtitle1">Email: {companyEmail}</Typography>
        )}
        {dlNo && <Typography variant="subtitle1">DL No.: {dlNo}</Typography>}
        {companyPan && (
          <Typography variant="subtitle1">PAN: {companyPan}</Typography>
        )}
        {companyAddress && (
          <Typography variant="subtitle1">
            Company Address: {companyAddress}
          </Typography>
        )}
        {city && <Typography variant="subtitle1">City: {city}</Typography>}
        {state && <Typography variant="subtitle1">State: {state}</Typography>}
        {pincode && (
          <Typography variant="subtitle1">Pincode: {pincode}</Typography>
        )}
        {companyGstin && (
          <Typography variant="subtitle1">GSTIN: {companyGstin}</Typography>
        )}
        {companyMobile && (
          <Typography variant="subtitle1">Mobile: {companyMobile}</Typography>
        )}
      </Box>
    </>
  );
};

export default ViewSupplierDetails;
