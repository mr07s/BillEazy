import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";

export default function DatePicker(props) {
  const { lrDate, setLrDate } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer sx={{ marginBottom: "0.3rem" }} components={["DateField"]}>
        <DateField
          label={props.name}
          value={lrDate}
          onChange={(newlrDate) => setLrDate(newlrDate)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
