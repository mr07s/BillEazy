import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import { toast, Toaster } from "react-hot-toast";
import API from "../../api";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/material";
import useInvoiceApis from "../hooks/invoice.hooks";
import { useSelector } from "react-redux";
import Tooltip from "@mui/material/Tooltip";

export default function InvoiceDialouge(props) {
  const { addSupplierDetails } = useInvoiceApis();
  const [open, setOpen] = React.useState(false);
  const [firmname, setFirmName] = React.useState("");
  const [companyGSTIN, setCompanyGSTIN] = React.useState("");
  const [companyAddress, setCompanyAddress] = React.useState("");
  const [companyMobile, setCompanyMobile] = React.useState();
  const [state, setState] = React.useState("");
  const [pincode, setPincode] = React.useState();
  const [companyemail, setCompanyemail] = React.useState("");
  const [city, setCity] = React.useState("");
  const [companyPan, setCompanyPan] = React.useState("");
  const [dl, setDl] = React.useState();
  const User = useSelector((state) => state.authReducer);
  const { token, user } = User;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
  };
  const handleSubmit = async () => {
    addSupplierDetails({
      firmName: firmname,
      companyGstin: companyGSTIN,
      companyAddress,
      companyEmail: companyemail,
      dlNo: dl,
      city,
      state,
      pincode,
      mobileNumber: companyMobile,
      companyPan,
      userId: user._id,
    });
    setOpen(false);
  };
  //   const handleSubmit = async () => {
  //     try {
  //       const { data } = await API.post("/api/medicine/addmedicine", {
  //         name,
  //         quantity,
  //         price,
  //       });

  //       if (data?.success) {
  //         toast.success("Successfully product added");
  //         props.getAllMedicines();
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       toast.error("Something went Wrong");
  //     }

  //     handleClose();
  //   };
  return (
    <Box>
      <Tooltip title="Add New">
        <EditIcon
          onClick={handleClickOpen}
          sx={{ marginRight: "2rem", cursor: "pointer" }}
        />
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            height: "2rem",
            backgroundColor: "#073259",
            color: "#ffffff",
            fontFamily: "Roboto",
            mb: "1.5rem",
          }}
        >
          SUPPLIER DETAILS
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Add seller details</DialogContentText> */}

          <TextField
            autoFocus
            margin="dense"
            id="firmname"
            label="Firm Name"
            type="name"
            fullWidth
            variant="outlined"
            value={firmname}
            onChange={(e) => setFirmName(e.target.value.toUpperCase())}
          />

          <TextField
            autoFocus
            margin="dense"
            id="companyGSTIN"
            label="Company GSTIN"
            type="text"
            fullWidth
            variant="outlined"
            value={companyGSTIN}
            onChange={(e) => setCompanyGSTIN(e.target.value)}
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
            onChange={(e) => setCompanyAddress(e.target.value.toUpperCase())}
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
              sx={{
                width: "48%",
              }}
              // fullWidth
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
              sx={{
                width: "49%",
              }}
              // fullWidth
              variant="outlined"
              value={state}
              onChange={(e) => setState(e.target.value.toUpperCase())}
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
              sx={{
                width: "30%",
              }}
              // fullWidth
              variant="outlined"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />

            <TextField
              autoFocus
              margin="dense"
              id="companyemail"
              label="Company Email"
              type="email"
              sx={{
                width: "67%",
              }}
              // fullWidth
              variant="outlined"
              value={companyemail}
              onChange={(e) => setCompanyemail(e.target.value)}
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
              id="city"
              label="City"
              type="string"
              sx={{
                width: "48%",
              }}
              // fullWidth
              variant="outlined"
              value={city}
              onChange={(e) => setCity(e.target.value.toUpperCase())}
            />
            <TextField
              autoFocus
              margin="dense"
              id="companyPan"
              label="Company Pan No."
              type="email"
              sx={{
                width: "49%",
              }}
              // fullWidth
              variant="outlined"
              value={companyPan}
              onChange={(e) => setCompanyPan(e.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="outlined">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Toaster />
    </Box>
  );
}
