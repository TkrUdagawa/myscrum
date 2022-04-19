import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Point(props: any) {
    console.log(props);
  const [point, setPoint] = React.useState(props.defaultValue);

  const handleChange = (event: SelectChangeEvent) => {
    setPoint(event.target.value as string);
  };

  return (
        <Select variant="standard"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={point}
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={5}>5</MenuItem>          
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={13}>13</MenuItem>
          <MenuItem value={21}>21</MenuItem>
          <MenuItem value={34}>34</MenuItem>
          <MenuItem value={55}>55</MenuItem>
        </Select>
  );
}