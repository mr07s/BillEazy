import { Button } from "@mui/base";
import React from "react";
import AddMedDialouge from "../MuuiComponents/AddMedDialouge";

const AddMedicine = ({ getAllMedicines }) => {
  return (
    <>
      {/* <Button> */}
      <AddMedDialouge getAllMedicines={getAllMedicines} />
      {/* </Button> */}
    </>
  );
};

export default AddMedicine;
