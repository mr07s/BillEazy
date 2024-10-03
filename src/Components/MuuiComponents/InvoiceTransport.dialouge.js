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
import InvoiceTextField from "./Invoice.textField";
import InvoiceProductsRadioGroup from "./InvoiceProduct.Radiogroup";
import InvoiceTransportRadiogroup from "./InvoiceTransport.Radiogroup";
import DatePicker from "./InvoiceTransport.Datepicker";
import TransportSelect from "./InvoiceTransport.select";
import { Box } from "@mui/material";
import useInvoiceApis from "../hooks/invoice.hooks";
import dayjs from "dayjs";
import TransportSupplyDatePicker from "./invoiceTransport.supplydate.datepicker";
import { useSelector } from "react-redux";
import Tooltip from "@mui/material/Tooltip";

export default function InvoiceTransport(props) {
  const { addTransportDetails } = useInvoiceApis();
  const [open, setOpen] = React.useState(false);
  const [lrnumber, setLrnumber] = React.useState("");
  const [lrDate, setLrDate] = React.useState(dayjs("2022-04-17"));
  const [supplyDate, setSupplyDate] = React.useState(dayjs("2022-04-17"));
  const [placeofsupply, setPlaceofsupply] = React.useState("");
  const [vehiclenumber, setVehiclenumber] = React.useState("");
  const [transportType, setTransportType] = React.useState();
  const [supplyType, setSupplyType] = React.useState("NONE");
  const User = useSelector((state) => state.authReducer);
  const { user } = User;
  //   const [companyPan, setCompanyPan] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
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
  console.log(lrDate.$d);
  console.log(supplyDate.$d);
  const handleSubmit = async () => {
    addTransportDetails({
      lrNumber: lrnumber,
      placeOfSupply: placeofsupply,
      vehicleNumber: vehiclenumber,
      lrDate,
      dateOfSupply: supplyDate,
      supplyType,
      type: transportType,
      userId: user._id,
    });
    handleClose();
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
          sx={{
            height: "2rem",
            backgroundColor: "#073259",
            color: "#ffffff",
            fontFamily: "Roboto",
          }}
        >
          TRANSPORT DETAILS
        </DialogTitle>

        <DialogContent>
          <InvoiceTransportRadiogroup
            transportType={transportType}
            setTransportType={setTransportType}
          />

          <DatePicker name={"LR Date"} lrDate={lrDate} setLrDate={setLrDate} />
          <TextField
            autoFocus
            margin="dense"
            id="lrnumber"
            label="LR Number"
            type="number"
            fullWidth
            variant="outlined"
            value={lrnumber}
            onChange={(e) => setLrnumber(e.target.value)}
          />
          <TransportSupplyDatePicker
            name={"Date of Supply"}
            supplyDate={supplyDate}
            setSupplyDate={setSupplyDate}
          />
          <TextField
            autoFocus
            margin="dense"
            id="placeofsupply"
            label="Place Of Supply"
            type="text"
            fullWidth
            variant="outlined"
            value={placeofsupply}
            onChange={(e) => setPlaceofsupply(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="vehiclenumber"
            label="Vehicle Number"
            type="number"
            fullWidth
            variant="outlined"
            value={vehiclenumber}
            onChange={(e) => setVehiclenumber(e.target.value)}
          />
          <TransportSelect
            supplyType={supplyType}
            setSupplyType={setSupplyType}
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
