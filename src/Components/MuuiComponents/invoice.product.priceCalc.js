import { Box, Paper } from "@mui/material";
import React from "react";

const InvoiceproductpriceCalc = ({ totalProductPrice, totalTaxAmount }) => {
  return (
    <>
      <Box>
        <h4>Total Tax: {totalTaxAmount}</h4>
      </Box>
      <Box>
        {" "}
        <h4>Total Price : {totalProductPrice}</h4>{" "}
      </Box>
    </>
  );
};

export default InvoiceproductpriceCalc;
