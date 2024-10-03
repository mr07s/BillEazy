import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

const ViewProductsDetails = ({ productData }) => {
  // const productData = useSelector((state) => state.ProductReducer);
  console.log({ productData });
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
        {productData?.data?.itemName && (
          <Typography variant="subtitle1">
            Item Name: {productData?.data?.itemName}
          </Typography>
        )}
        {productData?.data?.itemDescription && (
          <Typography variant="subtitle1">
            Description: {productData?.data?.itemDescription}
          </Typography>
        )}
        {productData?.data?.hsn && (
          <Typography variant="subtitle1">
            HSN: {productData?.data?.hsn}
          </Typography>
        )}
        {productData?.data?.quantity && (
          <Typography variant="subtitle1">
            Quantity: {productData?.data?.quantity}
          </Typography>
        )}
        {productData?.data?.unit && (
          <Typography variant="subtitle1">
            Unit: {productData?.data?.unit}
          </Typography>
        )}
        {productData?.data?.salePrice && (
          <Typography variant="subtitle1">
            Sale Price: {productData?.data?.salePrice}
          </Typography>
        )}
        {productData?.data?.discount && (
          <Typography variant="subtitle1">
            Discount: {productData?.data?.discount}
          </Typography>
        )}
        {productData?.data?.discountType && (
          <Typography variant="subtitle1">
            Discount Type: {productData?.data?.discountType}
          </Typography>
        )}
        {productData?.data?.taxType && (
          <Typography variant="subtitle1">
            Tax Type: {productData?.data?.taxType}
          </Typography>
        )}
        {productData?.data?.gst && (
          <Typography variant="subtitle1">
            GST: {productData?.data?.gst}
          </Typography>
        )}
        {productData?.data?.cess && (
          <Typography variant="subtitle1">
            Cess: {productData?.data?.cess}
          </Typography>
        )}
        {productData?.data?.final_price && (
          <Typography variant="subtitle1">
            Total Amount: {productData?.data?.final_price}
          </Typography>
        )}
        {/* {productData?.data?.paid_amount && (
          <Typography variant="subtitle1">
            PaidAmount: {productData?.data?.paid_amount}
          </Typography>
        )} */}
      </Box>
      <Divider sx={{ color: "red", borderWidth: "1px" }} />
    </>
  );
};

export default ViewProductsDetails;
