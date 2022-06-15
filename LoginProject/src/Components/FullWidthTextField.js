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
      borderColor: '#9EB9DB',
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
        position: 'absolute',
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '10px',
        width: 500,
        maxWidth: '100%',
      }}
    >
      <CustomCssTextFieldComponent label="Username" />
    </Box>
  );
}
