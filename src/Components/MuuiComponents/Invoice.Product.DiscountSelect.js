import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Product_discount_type_Select(props) {
  const { discountType, setDiscountType } = props;

  const handleChange = (event) => {
    setDiscountType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, marginTop: "0.5rem" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Discount Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={discountType}
          label="Discount Type"
          defaultValue={"Value Wise"}
          onChange={handleChange}
        >
          <MenuItem value={"Percent Wise"}>Percent Wise</MenuItem>
          <MenuItem value={"Value Wise"}>Value Wise</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
