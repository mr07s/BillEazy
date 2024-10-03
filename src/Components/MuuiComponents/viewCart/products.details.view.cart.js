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

export default function ProductCardViewer({ product }) {
  const dispatch = useDispatch();
  const handleSubmitReducer = () => {
    dispatch({ type: "POST_PRODUCT_DETAILS", payload: { data: product } });
  };
  const {
    itemName,
    itemDescription,
    hsn,
    quantity,
    unit,
    salePrice,
    discount,
    discountType,
    taxType,
    gst,
    cess,
    _,
    userId,
  } = product;
  console.log(product);
  const { deleteProductDetails } = useInvoiceApis();
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
          {itemName && (
            <Typography variant="h5" ml={2}>
              {itemName}
            </Typography>
          )}
          {/* <Button
            onClick={() => {
              deleteProductDetails(product._id);
            }}
          >
            Delete
          </Button> */}
        </Box>
        {itemDescription && (
          <Typography variant="h6">Description : {itemDescription}</Typography>
        )}
        {hsn && <Typography variant="h6">HSN.: {hsn}</Typography>}
        {quantity && <Typography variant="h6">Quantity: {quantity}</Typography>}
        {unit && <Typography variant="h6">Unit: {unit}</Typography>}
        {salePrice && (
          <Typography variant="h6">SalePrice: {salePrice}</Typography>
        )}
        {discount && <Typography variant="h6">Discount: {discount}</Typography>}
        {discountType && (
          <Typography variant="h6">DiscountType: {discountType}</Typography>
        )}
        {taxType && <Typography variant="h6">TaxType: {taxType}</Typography>}
        {gst && <Typography variant="h6">GST: {gst}</Typography>}
        {cess && <Typography variant="h6">Cess: {cess}</Typography>}
        {_ && <Typography variant="h6">_: {_}</Typography>}
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={handleSubmitReducer}>
          Select
        </Button>
      </CardActions>
    </Card>
  );
}
