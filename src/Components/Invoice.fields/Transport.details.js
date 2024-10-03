import { Box, Typography } from "@mui/material";
import { React, useState } from "react";
import ShowAllTransport from "../MuuiComponents/fetchInvoiceSubfield/invoice.Transport.details.showAllTransport";

import InvoiceTransport from "../MuuiComponents/InvoiceTransport.dialouge";

const TransportDetails = () => {
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
          TRANSPORT DETAILS
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
          <ShowAllTransport open={open} setOpen={setOpen} />
          <InvoiceTransport />
        </Box>
      </Box>
    </>
  );
};

export default TransportDetails;
