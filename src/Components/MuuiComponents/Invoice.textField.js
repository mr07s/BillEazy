import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InvoiceRadioGroup from "./InvoiceRadiogrp";

export default function InvoiceTextField(props) {
  const { invoiceNo, setInvoiceNo, date, setDate } = props;
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        border: "1px solid #d9dbe9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "0.5rem",
        width: "15vw",
        height: "40vh",
        borderRadius: "15px",
        flexDirection: "column",
      }}
      noValidate
      autoComplete="off"
    >
      <InvoiceRadioGroup />
      <TextField
        id="outlined-basic"
        label="Invoice Prefix"
        variant="standard"
      />
      <TextField
        id="filled-basic"
        label="Invoice no"
        variant="standard"
        value={invoiceNo}
        onChange={(e) => {
          setInvoiceNo(e.target.value);
        }}
      />
      <TextField
        id="standard-basic"
        // label="invoice date"
        variant="standard"
        type={"date"}
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
    </Box>
  );
}
