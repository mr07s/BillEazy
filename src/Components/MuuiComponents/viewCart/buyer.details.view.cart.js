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

export default function BuyerCardViewer({ props }) {
  const dispatch = useDispatch();
  const handleSubmitReducer = () => {
    dispatch({
      type: "POST_BUYER_DETAILS",
      payload: {
        data: props,
      },
    });
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
          {props?.companyName && (
            <Typography variant="h5" ml={2}>
              {props?.companyName}
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
        {props?.companyEmail && (
          <Typography variant="h6">Email : {props?.companyEmail}</Typography>
        )}
        {props?.dlNo && (
          <Typography variant="h6">DL No.: {props?.dlNo}</Typography>
        )}
        {props?.gstTreatmentType && (
          <Typography variant="h6">PAN: {props?.gstTreatmentType}</Typography>
        )}
        {props?.companyAddress && (
          <Typography variant="h6">
            Company Address: {props?.companyAddress}
          </Typography>
        )}
        {props?.city && (
          <Typography variant="h6">City: {props?.city}</Typography>
        )}
        {props?.state && (
          <Typography variant="h6">State: {props?.state}</Typography>
        )}
        {props?.pincode && (
          <Typography variant="h6">Pincode: {props?.pincode}</Typography>
        )}
        {props?.companyGstin && (
          <Typography variant="h6">GSTIN: {props?.companyGstin}</Typography>
        )}
        {props?.companyMobile && (
          <Typography variant="h6">Mobile: {props?.companyMobile}</Typography>
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
