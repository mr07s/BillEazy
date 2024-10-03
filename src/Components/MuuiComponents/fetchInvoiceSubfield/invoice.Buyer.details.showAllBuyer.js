import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import BuyerCardViewer from "../viewCart/buyer.details.view.cart";
import { toast } from "react-hot-toast";
import API from "../../../api";
import { useSelector } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useInvoiceApis from "../../hooks/invoice.hooks";
import ListIcon from "@mui/icons-material/List";
import Tooltip from "@mui/material/Tooltip";
export default function ShowAllBuyer(props) {
  const { open, setOpen } = props;
  const { getBuyerDetails, buyerData } = useInvoiceApis();
  const User = useSelector((state) => state.authReducer);
  const { user } = User;
  const totalBuyers = buyerData?.length;
  // console.log(user._id);
  // console.log(buyerData);
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
            await getBuyerDetails(user._id);
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
          {`Previous Buyers - ${totalBuyers}`}
        </DialogTitle>
        <DialogContent>
          {buyerData?.map((buyer) => (
            <BuyerCardViewer
              key={buyer._id}
              props={buyer}
              getBuyerDetails={getBuyerDetails}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Save</Button>
          {/* <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
