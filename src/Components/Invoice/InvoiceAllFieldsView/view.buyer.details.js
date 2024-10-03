import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

const ViewBuyerDetails = () => {
  const buyerData = useSelector((state) => state.BuyerReducer);

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
        {buyerData?.data?.companyName && (
          <Typography variant="subtitle1">
            Company Name: {buyerData.data?.companyName}
          </Typography>
        )}
        {buyerData?.data?.companyEmail && (
          <Typography variant="subtitle1">
            Email: {buyerData?.data?.companyEmail}
          </Typography>
        )}
        {buyerData?.data?.dlNo && (
          <Typography variant="subtitle1">
            DL No.: {buyerData?.data?.dlNo}
          </Typography>
        )}
        {buyerData?.data?.gstTreatmentType && (
          <Typography variant="subtitle1">
            GST Treatment Type: {buyerData?.data?.gstTreatmentType}
          </Typography>
        )}
        {buyerData?.data?.companyAddress && (
          <Typography variant="subtitle1">
            Company Address: {buyerData?.data?.companyAddress}
          </Typography>
        )}
        {buyerData?.data?.city && (
          <Typography variant="subtitle1">
            City: {buyerData?.data?.city}
          </Typography>
        )}
        {buyerData?.data?.state && (
          <Typography variant="subtitle1">
            State: {buyerData?.data?.state}
          </Typography>
        )}
        {buyerData?.data?.pincode && (
          <Typography variant="subtitle1">
            Pincode: {buyerData?.data?.pincode}
          </Typography>
        )}
        {buyerData?.data?.companyGstin && (
          <Typography variant="subtitle1">
            GSTIN: {buyerData?.data?.companyGstin}
          </Typography>
        )}
        {buyerData?.data?.companyMobile && (
          <Typography variant="subtitle1">
            Mobile: {buyerData?.data?.companyMobile}
          </Typography>
        )}
      </Box>
    </>
  );
};

export default ViewBuyerDetails;
