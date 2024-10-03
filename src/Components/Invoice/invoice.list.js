import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Invoicetable from "../MuuiComponents/invoiceTable";
// import "./InvoiceList.css";
import SearchAppBar from "../MuuiComponents/Searchbar";
import useInvoiceApis from "../hooks/invoice.hooks";
import { useSelector } from "react-redux";
// import invoiceTable from "../MuuiComponents/invoiceTable";
const InvoiceList = () => {
  const User = useSelector((state) => state.authReducer);
  const { user } = User;
  console.log(user);
  const navigate = useNavigate();
  const { getInvoiceDetails } = useInvoiceApis();
  // const handleSubmit = useCallback(() => {
  //   getInvoiceDetails(user._id);
  // }, []);

  useEffect(() => {
    getInvoiceDetails(user?._id);

    // return () => {
    //   window.removeEventListener("load", getInvoiceDetails(user._id));
    // };
  }, [getInvoiceDetails, user?._id]);

  return (
    <Box
      className="invoice_container"
      sx={{
        // border: "10px solid red",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        className="table_container"
        sx={{
          // border: "none",
          // border: "10px solid red",

          marginTop: "5rem",
          height: "90%",
          width: "90%",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/invoice/create");
            }}
            sx={{
              width: "5rem",
              marginLeft: "auto",
              display: "flex",
              height: "2rem",
              backgroundColor: "#073259",
              color: "white",
            }}
          >
            Create
          </Button>
          <SearchAppBar />
          {/* <Button onClick={() => navigate("/invoice/allinvoicepdf")}>
            Get PDF
          </Button> */}
        </Box>
        <Invoicetable field="Invoice" />
      </Box>
    </Box>
  );
};

export default InvoiceList;
