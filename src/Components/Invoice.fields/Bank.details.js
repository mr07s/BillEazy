import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ShowAllBankDetails from "../MuuiComponents/fetchInvoiceSubfield/invoice.Bank.details.showAllBankdetails";
import InvoiceDialouge from "../MuuiComponents/InvoiceBankdetails.dialouge";

const Bankdetails = () => {
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
          // marginLeft: ".7rem",
          pl: ".7rem",
          //   marginRight: ".7rem",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "10px",
          background: "#073259",
          color: "white",
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "" }}>
          BANK DETAILS (OPTIONAL FIELD)
        </Typography>
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
          <ShowAllBankDetails open={open} setOpen={setOpen} />
          <InvoiceDialouge />
        </Box>
      </Box>
    </>
  );
};

export default Bankdetails;
