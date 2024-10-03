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

export default function SupplierCardViewer({ supplier }) {
  const dispatch = useDispatch();
  const handleSubmitReducer = () => {
    dispatch({
      type: "POST_SUPPLIER_DETAILS",
      payload: {
        data: supplier,
      },
    });
  };
  const {
    firmName,
    companyGstin,
    dlNo,
    companyAddress,
    companyMobile,
    state,
    pincode,
    companyEmail,
    city,
    companyPan,
  } = supplier;
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
          {firmName && (
            <Typography variant="h5" ml={2}>
              {firmName}
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
        {companyGstin && (
          <Typography variant="h6">companyGstin : {companyGstin}</Typography>
        )}
        {dlNo && <Typography variant="h6">DL No.: {dlNo}</Typography>}
        {companyEmail && (
          <Typography variant="h6">Email.: {companyEmail}</Typography>
        )}
        {companyPan && <Typography variant="h6">Pan: {companyPan}</Typography>}

        {companyAddress && (
          <Typography variant="h6">
            Company Address: {companyAddress}
          </Typography>
        )}
        {city && <Typography variant="h6">City: {city}</Typography>}
        {state && <Typography variant="h6">State: {state}</Typography>}
        {pincode && <Typography variant="h6">Pincode: {pincode}</Typography>}

        {companyMobile && (
          <Typography variant="h6">Mobile: {companyMobile}</Typography>
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
