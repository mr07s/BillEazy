import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const DeliveryChallanTransportDetails = () => {
  const transportData = useSelector((state) => state.TransportReducer);

  return (
    <>
      {" "}
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
        {transportData?.data?.type && (
          <Typography variant="h6">{transportData?.data?.type}</Typography>
        )}
        {transportData?.data?.lrDate && (
          <Typography variant="subtitle1">
            Lr Date: {transportData?.data?.lrDate}
          </Typography>
        )}
        {transportData?.data?.lrNumber && (
          <Typography variant="subtitle1">
            Lr Number.: {transportData?.data?.lrNumber}
          </Typography>
        )}
        {transportData?.data?.dateOfSupply && (
          <Typography variant="subtitle1">
            Date Of Supply: {transportData?.data?.dateOfSupply}
          </Typography>
        )}
        {transportData?.data?.placeOfSupply && (
          <Typography variant="subtitle1">
            placeOfSupply: {transportData?.data?.placeOfSupply}
          </Typography>
        )}
        {transportData?.data?.vehicleNumber && (
          <Typography variant="subtitle1">
            vehicleNumber: {transportData?.data?.vehicleNumber}
          </Typography>
        )}
        {transportData?.data?.supplyType && (
          <Typography variant="subtitle1">
            supplyType: {transportData?.data?.supplyType}
          </Typography>
        )}
      </Box>
    </>
  );
};

export default DeliveryChallanTransportDetails;
