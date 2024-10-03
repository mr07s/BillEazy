import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import { useSelector } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useInvoiceApis from "../../hooks/invoice.hooks";
import BankCardViewer from "../viewCart/bank.details.view.cart";
import Tooltip from "@mui/material/Tooltip";
import ListIcon from "@mui/icons-material/List";

export default function ShowAllBankDetails(props) {
  const { open, setOpen } = props;
  const { getBankDetails, bankData } = useInvoiceApis();
  const User = useSelector((state) => state.authReducer);
  const { user } = User;
  const totalBanks = bankData?.length;

  const handleClickOpen = () => {
    setOpen(true);
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
            await getBankDetails(user._id);
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
          {`Bank Accounts - ${totalBanks}`}
        </DialogTitle>
        <DialogContent>
          {bankData?.map((bank) => (
            <BankCardViewer
              key={bank._id}
              bank={bank}
              handleClose={handleClose}
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
