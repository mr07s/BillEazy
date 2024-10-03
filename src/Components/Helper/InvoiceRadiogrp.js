import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function InvoiceRadioGroup() {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="taxinvoice"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="taxinvoice"
          control={<Radio />}
          label="Tax Invoice"
        />
        <FormControlLabel
          value="billofsupply"
          control={<Radio />}
          label="Bill of supply"
        />
      </RadioGroup>
    </FormControl>
  );
}
