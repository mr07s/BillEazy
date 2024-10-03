import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function InvoiceTransportRadiogroup(props) {
  const { transportType, setTransportType } = props;
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="None"
        name="radio-buttons-group"
        sx={{
          display: "flex",
          flexDirection: "row",
          marginTop: "1.2rem",
          marginBottom: ".7rem",
        }}
        onChange={(e) => setTransportType(e.target.value)}
      >
        <FormControlLabel value="None" control={<Radio />} label="none" />
        <FormControlLabel value="Road" control={<Radio />} label="Road" />
        <FormControlLabel value="Rail" control={<Radio />} label="Rail" />
        <FormControlLabel value="Air" control={<Radio />} label="Air" />
        <FormControlLabel
          value="ship"
          control={<Radio />}
          label="Ship /Road cum Ship"
        />
      </RadioGroup>
    </FormControl>
  );
}
