import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Select_Percent_Wise_Product() {
  const [selectProduct, setSelectProduct] = React.useState(10);

  const handleChange = (event) => {
    setSelectProduct(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, marginTop: "0.5rem" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="gst"
          value={selectProduct}
          label=""
          onChange={handleChange}
        >
          <MenuItem value={10}>Percent Wise</MenuItem>
          <MenuItem value={20}>Unit Wise</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
