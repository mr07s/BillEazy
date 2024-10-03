import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ProductGSTselect(props) {
  const { gst, setGst } = props;

  const handleChange = (event) => {
    setGst(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, marginTop: "0.5rem" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">GST(%)</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="gst"
          value={gst}
          label="GST(%)"
          defaultValue={0}
          onChange={handleChange}
        >
          <MenuItem value={0.01}>No GST</MenuItem>
          <MenuItem value={0}>GST @ 0%</MenuItem>
          <MenuItem value={0.02}>Exempted</MenuItem>
          <MenuItem value={0.1}>GST @ 0.1%</MenuItem>
          <MenuItem value={0.25}>GST @ 0.25%</MenuItem>
          <MenuItem value={1.5}>GST @ 1.5%</MenuItem>
          <MenuItem value={3}>GST @ 3%</MenuItem>
          <MenuItem value={5}>GST @ 5%</MenuItem>
          <MenuItem value={6}>GST @ 6%</MenuItem>
          <MenuItem value={12}>GST @ 12%</MenuItem>
          <MenuItem value={14}>GST @ 14%</MenuItem>
          <MenuItem value={18}>GST @ 18%</MenuItem>
          <MenuItem value={28}>GST @ 28%</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
