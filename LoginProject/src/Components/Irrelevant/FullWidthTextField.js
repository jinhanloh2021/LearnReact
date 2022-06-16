import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

//trying out Material UI library.
//trying out customising their components.

const CustomCssTextFieldComponent = styled(TextField)({
  width: 500,
  position: 'relative',
  marginTop: 10,
  marginBottom: 10,

  '& label.Mui-focused': {
    color: 'green',
  },
  '& label': {
    color: '#BABABA',
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
});

//correct use of props?
export default function FullWidthTextField(props) {
  return <CustomCssTextFieldComponent label={props.label} />;
}