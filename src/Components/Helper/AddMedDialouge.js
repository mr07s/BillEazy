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

export default function AddMedDialouge(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [price, setPrice] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
  };
  const handleSubmit = async () => {
    try {
      const { data } = await API.post("/v1/api/medicine/addmedicine", {
        name,
        quantity,
        price,
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
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        startIcon={<AddIcon />}
      >
        Add Medicine
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Medicine</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add new medicines to your inventory
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="Medicine"
            label="Medicine Name"
            type="name"
            fullWidth
            variant="outlined"
            value={name.toUpperCase()}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="Quantity"
            label="Medicine Quantity"
            type="number"
            fullWidth
            variant="outlined"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="Price"
            label="Medicine Price"
            type="Number"
            fullWidth
            variant="outlined"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
