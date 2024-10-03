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
import { Box } from "@mui/material";

export default function UpdateMedDialouge(props) {
  // const [open, setOpen] = React.useState(props);
  const { open, setOpen } = props;
  const [name, setName] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [hsn, setHsn] = React.useState("");
  const [rate, setRate] = React.useState("");
  const [mrp, setMrp] = React.useState("");
  const [expiry, setExpiry] = React.useState("");
  const [mfg, setMfg] = React.useState("");
  const [batch, setBatch] = React.useState("");
  const [type, setType] = React.useState("");
  const [pack, setPack] = React.useState("");

  // const handleClickOpen = () => {
  //   setOpen(props.open);
  // };

  const handleClose = async () => {
    setOpen(false);
  };
  const handleSubmit = async () => {
    try {
      const { data } = await API.post("/v1/api/medicine/addmedicine", {
        name,
        quantity,
        rate,
        mrp,
        hsn,
        expiry,
        mfg,
        batch,
        type,
        pack,
      });

      if (data?.success) {
        toast.success("Successfully product added");
        props.getAllMedicines();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong");
    }

    handleClose();
  };
  return (
    <Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Medicine</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Update existing medicines in your inventory
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="MEDICINE NAME"
            type="name"
            fullWidth
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value.toUpperCase())}
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
              id="quantity"
              label=" QUANTITY"
              type="number"
              sx={{ width: "30%" }}
              // fullWidth
              variant="outlined"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="hsn"
              label="HSN"
              type="number"
              sx={{ width: "68%" }}
              // fullWidth
              variant="outlined"
              value={hsn}
              onChange={(e) => setHsn(e.target.value)}
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
              id="rate"
              label="RATE"
              type="Number"
              // fullWidth
              sx={{ width: "30%" }}
              variant="outlined"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="mfg"
              label="MFG"
              type="String"
              // fullWidth
              sx={{ width: "68%" }}
              variant="outlined"
              value={mfg}
              onChange={(e) => setMfg(e.target.value.toUpperCase())}
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
              id="type"
              label="MEDICINE TYPE"
              type="Number"
              // fullWidth
              sx={{ width: "50%" }}
              variant="outlined"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="pack"
              label="PACK OF"
              type="String"
              // fullWidth
              sx={{ width: "48%" }}
              variant="outlined"
              value={pack}
              onChange={(e) => setPack(e.target.value.toUpperCase())}
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
              id="rate"
              label="BATCH NO."
              type="Number"
              sx={{ width: "60%" }}
              // fullWidth
              variant="outlined"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="mrp"
              label="MRP"
              type="Number"
              sx={{ width: "38%" }}
              // fullWidth
              variant="outlined"
              value={mrp}
              onChange={(e) => setMrp(e.target.value)}
            />
          </Box>
          <TextField
            autoFocus
            margin="dense"
            id="expiry"
            label="EXPIRY"
            type="Date"
            fullWidth
            variant="outlined"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
      <Toaster />
    </Box>
  );
}
