import { TextField } from '@mui/material';
import './LoginForm.css';

const FormControlStyle = {
  marginTop: '30px',
  width: '300px',
};

export default function LoginForm() {
  return (
    <div>
      <TextField variant="filled" sx={FormControlStyle} label="Username" />
      <TextField variant="filled" sx={FormControlStyle} label="Password" />
    </div>
  );
}
