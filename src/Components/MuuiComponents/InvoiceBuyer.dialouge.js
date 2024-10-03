import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Box } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import { toast, Toaster } from "react-hot-toast";
import API from "../../api";
import EditIcon from "@mui/icons-material/Edit";
import BuyerSelect from "./Invoice.Buyer.Select";
import useInvoiceApis from "../hooks/invoice.hooks";
import { useSelector } from "react-redux";
import Tooltip from "@mui/material/Tooltip";

export default function InvoiceDialouge(props) {
  const { addBuyerDetails } = useInvoiceApis();
  const [open, setOpen] = React.useState(false);
  const [companyname, setCompanyName] = React.useState("");
  const [GSTINno, setGSTINno] = React.useState("");
  const [companyAddress, setCompanyAddress] = React.useState("");
  const [pincode, setPincode] = React.useState();
  const [companyMobile, setCompanyMobile] = React.useState();
  const [email, setEmail] = React.useState("");
  const [state, setState] = React.useState("");
  const [dl, setDl] = React.useState();
  const [city, setCity] = React.useState("");
  const [gstTreatmentType, setGstTreatmentType] = React.useState();
  console.log(gstTreatmentType);
  //   const [companyPan, setCompanyPan] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
  };
  const User = useSelector((state) => state.authReducer);
  // console.log("Reducer user");
  const { token, user } = User;

  const handleSubmit = async () => {
    addBuyerDetails({
      companyName: companyname,
      companyGstin: GSTINno,
      companyAddress,
      pincode,
      companyMobile,
      companyEmail: email,
      state,
      dlNo: dl,
      city,
      gstTreatmentType,
      userId: user._id,
    });
    setOpen(false);
  };
  return (
    <div>
      <Tooltip title="Add New">
        <EditIcon
          onClick={handleClickOpen}
          sx={{ marginRight: "2rem", cursor: "pointer" }}
        />
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          // margin="dense"
          sx={{
            height: "2rem",
            backgroundColor: "#073259",
            color: "#ffffff",
            fontFamily: "Roboto",
            mb: "1.5rem",
          }}
        >
          Add New Buyer
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="companyname"
            label="Company Name"
            type="name"
            fullWidth
            variant="outlined"
            value={companyname}
            onChange={(e) => setCompanyName(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="GSTINno"
            label="GSTIN no."
            type="text"
            fullWidth
            variant="outlined"
            value={GSTINno}
            onChange={(e) => setGSTINno(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="dl"
            label="DL No."
            type="number"
            fullWidth
            variant="outlined"
            value={dl}
            onChange={(e) => setDl(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="companyAddress"
            label="Company Address"
            type="text"
            fullWidth
            variant="outlined"
            value={companyAddress}
            onChange={(e) => setCompanyAddress(e.target.value)}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextField
              autoFocus
              margin="dense"
              id="companyMobile"
              label="Company Mobile"
              type="number"
              // fullWidth
              sx={{
                width: "48%",
              }}
              variant="outlined"
              value={companyMobile}
              onChange={(e) => setCompanyMobile(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="State"
              label="State"
              type="text"
              // fullWidth
              sx={{
                width: "49%",
              }}
              variant="outlined"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextField
              autoFocus
              margin="dense"
              id="pincode"
              label="Pincode"
              type="number"
              // fullWidth
              sx={{
                width: "30%",
              }}
              variant="outlined"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />

            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="email"
              type="email"
              sx={{
                width: "67%",
              }}
              // fullWidth
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <TextField
            autoFocus
            margin="dense"
            id="city"
            label="City"
            type="email"
            fullWidth
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {/* <TextField
            autoFocus
            margin="dense"
            id="gstTreatmentType"
            label="GST Treatment Type"
            type="text"
            fullWidth
            variant="outlined"
            value={gstTreatmentType}
            onChange={(e) => setGstTreatmentType(e.target.value)}
          /> */}
          <BuyerSelect
            sx={{ margin: "dense" }}
            gstTreatmentType={gstTreatmentType}
            setGstTreatmentType={setGstTreatmentType}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
      <Toaster />
    </div>
  );
}
