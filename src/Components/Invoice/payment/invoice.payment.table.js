import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { useSelector } from "react-redux";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

export default function Invoice_Payment_Table({
  data,
  setPaidAmount,
  paidAmount,
}) {
  // const { data } = useSelector((state) => state.Invoice_Product_Reducer);
  // console.log(data);
  const { Invoice_Product } = data;
  console.log(Invoice_Product);
  // console.log(Invoice_Product?.product[0]?.unit);

  // const navigate = useNavigate();

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ color: "white" }}>
            <TableRow
              sx={{
                // borderRight: "10px solid black",
                background: "#073259",
              }}
            >
              <TableCell sx={{ color: "white" }} align="center">
                No.
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                Date
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                BuyerName
              </TableCell>
              {/* <TableCell sx={{ color: "white" }} align="center">
                ProductName
              </TableCell> */}
              <TableCell sx={{ color: "white" }} align="center">
                Total Amount
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                Pending Amount
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                Paid Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {Invoice_Product?.product?.map((product) => { */}
            <TableRow
              key={data?.Invoice_Product?._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                <TextField value={Invoice_Product?._id}></TextField>
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {data?.Invoice_Product?.invoiceDate}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {data?.Invoice_Product?.companyName}
              </TableCell>
              {/* <TableCell component="th" scope="row" align="center">
                  {product?.itemName}
                </TableCell> */}
              <TableCell component="th" scope="row" align="center">
                <TextField
                  value={data?.Invoice_Product?.totalProductPrice}
                  // onChange=()
                ></TextField>
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                <TextField
                  value={Invoice_Product?.pendingAmount}
                  // onChange=()
                ></TextField>
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                <TextField
                  value={paidAmount}
                  type="number"
                  onChange={(e) => setPaidAmount(e.target.value)}
                ></TextField>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
