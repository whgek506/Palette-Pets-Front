import React,{useState} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
     
    },
  },
};

// 태그 선택 어찌할지 생각해보자
const names = [
 '고양이',
 '강아지',
 '뭔강아지',
 '큰강아지',
 '사료추천',
 '간식추천',
 '산책로',
 '어디갈까',

];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectTags() {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const onDelete = (e) =>{
    console.log(e.value.label)
  }
  return (
    <>
<<<<<<< HEAD
      <FormControl sx={{m:1 ,width:"90%"}}>
=======
    <div>
      <FormControl sx={{m:1 ,width:"80%"}}>
>>>>>>> 271f5608eae019f4778904c837da2d57cd1d21b8
        <InputLabel id="demo-multiple-chip-label">태그 선택</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          inputProps={{MenuProps: {disableScrollLock: true}}}
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="태그 선택" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} onClick={onDelete} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
    </>
  );
}