import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CustomCssTextFieldComponent = styled(TextField)({
  width: 'inherit',
  '& label.Mui-focused': {
    color: 'green',
  },
  '& label': {
    color: 'grey',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'red',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#3c608e',
    },
    '&:hover fieldset': {
      borderColor: '#273E5C',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important', // override inline-style
  },
});

export default function FullWidthTextField() {
  return (
    <Box
      sx={{
        margin: 'auto',
        marginTop: '10px',
        width: 500,
        maxWidth: '100%',
      }}
    >
      <CustomCssTextFieldComponent label="Username" />
    </Box>
  );
}
