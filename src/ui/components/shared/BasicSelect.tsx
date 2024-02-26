import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface ISelect {
  menuItem1: string;
  menuItem2?: string;
  onChange: (status: string) => void;
  status?: string;
}

const BasicSelect:React.FC<ISelect> = (props) => {
 return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.status}
          label="Status"
          onChange={(event) =>{ props.onChange(event.target.value)}}
        >
          <MenuItem value={props.menuItem1}>{props.menuItem1}</MenuItem>
          <MenuItem value={props.menuItem2}>{props.menuItem2}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default BasicSelect;