import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function Invoice_Products_Tax_RadioGroup(props) {
  const { taxType, setTaxType } = props;
  const handleChange = (event) => {
    setTaxType(event.target.value);
  };
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Inclusive"
        name="radio-buttons-group"
        sx={{ display: "flex", flexDirection: "column" }}
        onChange={handleChange}
      >
        <h4>Select Tax Type</h4>
        <FormControlLabel
          value="Inclusive"
          control={<Radio />}
          label="Inclusive 0.00/ per unit"
        />
        <FormControlLabel
          value="Exclusive"
          control={<Radio />}
          label="Exclusive   0/ per unit"
        />
      </RadioGroup>
    </FormControl>
  );
}
