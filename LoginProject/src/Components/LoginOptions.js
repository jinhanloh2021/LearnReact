import * as React from 'react';
import './LoginOptions.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function LoginOptions() {
  return (
    <div>
      <FormGroup
        sx={{ position: 'relative', top: '20px', left: '17%', float: 'left' }}
      >
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: '#224957',
                '&.Mui-checked': {
                  color: '#224957',
                },
              }}
            />
          }
          sx={{
            color: '#224957',
          }}
          label="Remember me"
        />
      </FormGroup>
      <div className="forgotPassword">
        <p className="paraStyle">Forgot password?</p>
      </div>
    </div>
  );
}
