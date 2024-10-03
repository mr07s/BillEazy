import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";

export default function TransportSupplyDatePicker(props) {
  const { supplyDate, setSupplyDate } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer sx={{ marginBottom: "0.3rem" }} components={["DateField"]}>
        <DateField
          label={props.name}
          value={supplyDate}
          onChange={(newlrDate) => setSupplyDate(newlrDate)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
