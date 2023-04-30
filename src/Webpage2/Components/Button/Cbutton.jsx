import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 0, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small">Product</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Product"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Dairy Product</MenuItem>
        <MenuItem value={20}>Rice</MenuItem>
        <MenuItem value={30}>Vegetables</MenuItem>
        <MenuItem value={40}>Fruits</MenuItem>
      </Select>
    </FormControl>
  );
}
