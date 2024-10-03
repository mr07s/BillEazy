import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { MyDocument } from "../Invoice/MyDocument";
import useInvoiceApis from "../hooks/invoice.hooks";
export default function Invoicetable(props) {
  const { data } = useSelector((state) => state.InvoicesReducer);
  const Product_data = useSelector((state) => state.Invoice_Product_Reducer);
  console.log(data);
  // const pendingAmount =
  //   Product_data?.data?.Invoice_Product?.product?.final_price -
  //   Product_data?.data?.Invoice_Product?.product?.paid_amount;
  // console.log(pendingAmount);
  const navigate = useNavigate();
  const [status, setStatus] = React.useState("Unpaid");
  // const handlePayment = () => {
  //   console.log("handle");
  // };
  const { getInvoicePdf } = useInvoiceApis();
  const getpdf = ({ id }) => {
    console.log("Jiiiii");
    console.log(id);
    getInvoicePdf(id);
    console.log("send successfull");
    navigate("/invoice/view");
  };

  return (
    <TableContainer component={Paper} sx={{ height: 600, overflowX: "hidden" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead
          sx={{
            color: "white",
          }}
        >
          <TableRow
            sx={{
              background: "#073259",
            }}
          >
            {/* <TableCell>Dessert (100g serving)</TableCell> */}
            <TableCell sx={{ color: "white" }} align="center">
              {props.field} No.
            </TableCell>
            <TableCell sx={{ color: "white" }} align="center">
              {props.field} Date
            </TableCell>
            <TableCell sx={{ color: "white" }} align="center">
              BuyerName
            </TableCell>
            <TableCell sx={{ color: "white" }} align="center">
              Status
            </TableCell>
            <TableCell sx={{ color: "white" }} align="center">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ overflow: "scroll" }}>
          {data?.AllInvoice?.map((invoice) => (
            <TableRow
              key={invoice?._id}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                },
              }}
            >
              <TableCell component="th" scope="row" align="center">
                {invoice?.invoiceNo}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {moment(invoice?.invoiceDate).format("DD MMM, YYYY")}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {invoice?.buyerDetails?.companyName}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                <Typography variant="body2">
                  {invoice?.pendingAmount === 0 ? "Paid" : "Unpaid"}
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {invoice?.pendingAmount != 0 ? (
                  <Button
                    variant="outlined"
                    onClick={() => navigate(`/invoice/payment/${invoice?._id}`)}
                  >
                    Accept Payment
                  </Button>
                ) : null}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                <Button
                  onClick={() => {
                    getpdf({ id: invoice?._id });
                  }}
                >
                  {" "}
                  Get Pdf
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
