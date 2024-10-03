import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Buyed_Products = ({ Invoice_Product }) => {
  console.log(Invoice_Product);
  console.log(Invoice_Product?.product[0]?._id);
  // itemName: 'DGDG',
  // itemDescription: 'I',
  // hsn: '111',
  // quantity: 2,
  // unit: 1,
  // salePrice: 100,
  // discount: 10,
  // discountType: 'Percent Wise',
  // taxType: 'Inclusive',
  // gst: 3,
  // cess:
  //   {
  //     Invoice_Product?.product?.map((i) => console.log(i + 1));
  //   }
  return (
    <>
      {/* {
        Invoice_Product?.map(
            <Box>
                

            </Box>
        )
      } */}
      {/* hsn: '111',
        quantity: 2,
        unit: 1,
        salePrice: 100,
        discount: 10,
        discountType: 'Percent Wise',
        taxType: 'Inclusive',
        gst: 3,
        cess: 10,
        userId: '64d8de00dad5bd7bb6095731',
        final_price: 203.4, */}

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
                Product Name
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                Product Description
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                hsn
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                quantity
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                salePrice
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                discount
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                gst
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                cess
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                final price
              </TableCell>
            </TableRow>
          </TableHead>
          {Invoice_Product?.product?.map((product) => (
            <TableBody>
              {/* {Invoice_Product?.product?.map((product) => { */}
              <TableRow
                key={product?._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {product?.itemName}
                  {/* Hiii */}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {product?.itemDescription}
                </TableCell>
                {/* <TableCell component="th" scope="row" align="center">
                  {product?.itemName}
                </TableCell> */}
                <TableCell component="th" scope="row" align="center">
                  {/* <TextField
                    value={Invoice_Product?.totalProductPrice}
                    // onChange=()
                  ></TextField> */}
                  {product?.hsn}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {/* <TextField
                    value={Invoice_Product?.pendingAmount}
                    // onChange=()
                  ></TextField> */}
                  {product?.quantity}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {/* <TextField
                    value={paidAmount}
                    type="number"
                    onChange={(e) => setPaidAmount(e.target.value)}
                  ></TextField> */}
                  {product?.salePrice}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {product?.discount}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {product?.gst}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {product?.cess}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {product?.final_price}
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
          {/* })} */}
        </Table>
      </TableContainer>
    </>
  );
};

export default Buyed_Products;
