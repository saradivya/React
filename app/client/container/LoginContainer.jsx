import React, { useState } from 'react';
import { Button, FormGroup, FormControl, InputLabel, Input, Paper, Card  } from '@material-ui/core';
require('../utills/styles/LoginContainer.scss');
function LoginContainer(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function handleChange(id, e){
    if(id === 'email'){
      setEmail(e.target.value);
    }
    else if(id === 'password'){
      setPassword(e.target.value);
    }
  }

  function handleSubmit() {
    console.log(email);
    console.log(password);
  }

  return (
    <div className="login-container">
      <Paper className = "login-paper-container">
        <Card>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <FormControl>
                <InputLabel >Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => handleChange('email', e)}/>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormControl>
                <InputLabel>password</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text"  onChange={(e) => handleChange('password', e)}/>
              </FormControl>
            </FormGroup>
            <Button  disabled={false} variant = 'contained' color = 'primary' onClick={() => handleSubmit()}>
                    Login
            </Button>
          </form>
        </Card>
      </Paper>
    </div>

  );
}

export default LoginContainer;
