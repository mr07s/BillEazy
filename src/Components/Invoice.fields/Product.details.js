import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ShowAllProducts from "../MuuiComponents/fetchInvoiceSubfield/invoice.Products.details.showAllProducts";
import InvoiceDialouge from "../MuuiComponents/InvoiceProduct.dialouge";

const Productdetails = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        className="header"
        sx={{
          width: "97%",
          //   border: "1px solid black",
          backgroundColor: "#d9dbe9",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "3.5rem",
          marginTop: "1.2rem",
          paddingLeft: ".7rem",
          //   marginLeft: ".7rem",
          //   marginRight: ".7rem",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "10px",
          background: "#073259",
          color: "white",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ display: "flex", justifyContent: "center", marginBottom: "0" }}
        >
          PRODUCTS
        </Typography>
        {/* <ShowAllBuyer open={open} setOpen={setOpen} /> */}
        <Box
          sx={{
            // border: "1px solid red",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            width: "10vw",
            justifyContent: "space-around",
          }}
        >
          <ShowAllProducts open={open} setOpen={setOpen} />
          <InvoiceDialouge />
        </Box>
      </Box>
    </>
  );
};

export default Productdetails;
