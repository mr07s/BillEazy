import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function DeliveryChallanTable(props) {
  const { data } = useSelector((state) => state.DeliveryChallanReducer);
  const Product_data = useSelector(
    (state) => state.Delivery_Challan_Product_Reducer
  );
  // const pendingAmount =
  //   Product_data?.data?.deliveryChallan_Product?.product?.final_price -
  //   Product_data?.data?.deliveryChallan_Product?.product?.paid_amount;
  // console.log(pendingAmount);
  const navigate = useNavigate();
  const [status, setStatus] = React.useState("Unpaid");
  // const handlePayment = () => {
  //   console.log("handle");
  // };
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
          {data?.AlldeliveryChallan?.map((deliveryChallan) => (
            <TableRow
              key={deliveryChallan?._id}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                },
              }}
            >
              <TableCell component="th" scope="row" align="center">
                {deliveryChallan?.deliveryChallanNo}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {deliveryChallan?.deliveryChallanDate}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {deliveryChallan?.buyerDetails?.companyName}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                <TextField
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                ></TextField>
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                <Button
                  variant="outlined"
                  onClick={() =>
                    navigate(`/deliveryChallan/payment/${deliveryChallan?._id}`)
                  }
                >
                  Accept Payment
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
