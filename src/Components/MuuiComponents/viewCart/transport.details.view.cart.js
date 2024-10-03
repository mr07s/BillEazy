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

export default function TransportCardViewer({ transport }) {
  const dispatch = useDispatch();
  const {
    type,
    lrDate,
    lrNumber,
    dateOfSupply,
    placeOfSupply,
    vehicleNumber,
    supplyType,
  } = transport;
  // console.log(transport);
  //   const { deleteBuyerDetails } = useInvoiceApis();
  const handleSubmitReducer = () => {
    dispatch({ type: "POST_TRANSPORT_DETAILS", payload: { data: transport } });
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
          {type && (
            <Typography variant="h5" ml={2}>
              {type}
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
        {lrDate && <Typography variant="h6">LRDate : {lrDate}</Typography>}
        {lrNumber && (
          <Typography variant="h6">LR Number.: {lrNumber}</Typography>
        )}
        {dateOfSupply && (
          <Typography variant="h6">Date Of Supply: {dateOfSupply}</Typography>
        )}
        {placeOfSupply && (
          <Typography variant="h6">Place Of Supply: {placeOfSupply}</Typography>
        )}
        {vehicleNumber && (
          <Typography variant="h6">Vehicle Number: {vehicleNumber}</Typography>
        )}
        {supplyType && (
          <Typography variant="h6">Supply Type: {supplyType}</Typography>
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
