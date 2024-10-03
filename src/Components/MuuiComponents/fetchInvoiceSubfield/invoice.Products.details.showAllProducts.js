import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";

import { useSelector } from "react-redux";
import Tooltip from "@mui/material/Tooltip";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useInvoiceApis from "../../hooks/invoice.hooks";
import ListIcon from "@mui/icons-material/List";

import ProductCardViewer from ".././viewCart/products.details.view.cart";
import { ListItemIcon } from "@mui/material";
export default function ShowAllProducts(props) {
  const { open, setOpen } = props;
  const { getProductDetails, productData } = useInvoiceApis();
  const User = useSelector((state) => state.authReducer);
  const { user } = User;
  const totalProducts = productData?.length;

  // console.log(productData);
  const handleClickOpen = () => {
    setOpen(true);
    console.log(open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined"> */}
      <Tooltip title="Menu">
        <ListIcon
          onClick={async () => {
            await getProductDetails(user._id);
            handleClickOpen();
          }}
        />
      </Tooltip>
      {/* </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ height: "700px" }}
        fullWidth={true}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            backgroundColor: "#062541",
            color: "white",
            fontFamily: "Roboto",
            fontSize: "bold",
          }}
        >
          {`Previous Products - ${totalProducts}`}
        </DialogTitle>
        <DialogContent>
          {productData?.map((product) => (
            <ProductCardViewer
              key={product._id}
              product={product}

              //   getBuyerDetails={getBuyerDetails}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Save</Button>
          {/* <Button onClick={handleClose}>Agree</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
