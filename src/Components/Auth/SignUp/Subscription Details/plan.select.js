import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function PlanSelect(props) {
  const { plan, setPlan } = props;
  const handleChange = (event) => {
    setPlan(event.target.value);
  };

  return (
    <FormControl sx={{ mt: 3, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small-label">Plan</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={plan}
        label="Choose a Plan"
        onChange={handleChange}
      >
        <MenuItem value={"Free Trial"}>Free Trial</MenuItem>
        <MenuItem value={"Monthly"}>Monthly</MenuItem>
        <MenuItem value={"Annually"}>Annually</MenuItem>
      </Select>
    </FormControl>
  );
}
