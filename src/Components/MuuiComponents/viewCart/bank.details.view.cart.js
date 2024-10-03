import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import API from "../../../api";
import { toast } from "react-hot-toast";
import useInvoiceApis from "../../hooks/invoice.hooks";
import { useDispatch } from "react-redux";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function BankCardViewer({ bank }) {
  const { accountHolderName, accountNumber, ifscNumber, bankName, branchName } =
    bank;
  // console.log(bank);
  const dispatch = useDispatch();
  const handleSubmitReducer = () => {
    dispatch({ type: "POST_BANK_DETAILS", payload: { data: bank } });
    // handleClose();
  };
  return (
    <Card
      sx={{ minWidth: "10vw", marginTop: "2rem", border: "1px solid black" }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#d9dbe9",
            justifyContent: "space-between",
            borderRadius: ".2rem",
            // border: "1px solid black",
          }}
        >
          {accountHolderName && (
            <Typography variant="h5" ml={2}>
              {accountHolderName}
            </Typography>
          )}
          {/* <Button
            onClick={() => {
              deleteBuyerDetails(props._id);
            }}
          >
            Delete
          </Button> */}
        </Box>
        {accountNumber && (
          <Typography variant="h6">Account Number : {accountNumber}</Typography>
        )}
        {ifscNumber && (
          <Typography variant="h6">Ifsc Number.: {ifscNumber}</Typography>
        )}
        {bankName && (
          <Typography variant="h6">Bank Name: {bankName}</Typography>
        )}
        {branchName && (
          <Typography variant="h6">Branch Name: {branchName}</Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          // color="red"
          mt={3}
          onClick={handleSubmitReducer}
        >
          Select
        </Button>
      </CardActions>
    </Card>
  );
}
