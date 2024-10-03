import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BuyerSelect(props) {
  const { gstTreatmentType, setGstTreatmentType } = props;

  const handleChange = (event) => {
    setGstTreatmentType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, marginTop: "0.5rem" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          GST Treatment Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gstTreatmentType}
          label="GST Treatment Type"
          onChange={handleChange}
        >
          <MenuItem value={"NONE"}>NONE</MenuItem>
          <MenuItem value={"B2B"}>B2B</MenuItem>
          <MenuItem value={"SEZWP"}>SEZWP</MenuItem>
          <MenuItem value={"SEZWOP"}>SEZWOP</MenuItem>
          <MenuItem value={"EXPWP"}>EXPWP</MenuItem>
          <MenuItem value={"EXPWOP"}>EXPWOP</MenuItem>
          <MenuItem value={"DEXP"}>DEXP</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
