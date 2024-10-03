import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Invoicetable from "../MuuiComponents/invoiceTable";
// import "./InvoiceList.css";
import SearchAppBar from "../MuuiComponents/Searchbar";
// import invoiceTable from "../MuuiComponents/invoiceTable";
// import useInvoiceApis from "../hooks/invoice.hooks";
import { useSelector } from "react-redux";
import ProformaTable from "../MuuiComponents/proformaTable";
import useProformaApis from "../hooks/proforma.hooks";

const ProformaList = () => {
  const navigate = useNavigate();
  const { getProformaDetails } = useProformaApis();
  const User = useSelector((state) => state.authReducer);
  const { user } = User;

  useEffect(() => {
    window.addEventListener("load", getProformaDetails(user._id));
    // return () => {
    //   window.removeEventListener("load", getInvoiceDetails(user._id));
    // };
  }, [getProformaDetails]);

  return (
    <Box
      className="proforma_container"
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
          border: "none",
          marginTop: "5rem",
          // height: "80vh",
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
              navigate("/proforma/create");
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
        </Box>
        <ProformaTable field="Proforma" />
      </Box>
    </Box>
  );
};

export default ProformaList;
