import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const Login = ({ setUsername }) => {
  const [input, setInput] = useState('');

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setUsername(input);
  };

  return (
    <div className='app__login text-center mt-5 p-3'>
      <h1 className='mt-5 mb-5'>Welcome</h1>
      <form onSubmit={handleOnSubmit}>
        <InputGroup className='mb-3'>
          <FormControl
            placeholder='Enter your name...'
            aria-label='username'
            aria-describedby='basic-addon2'
            onChange={handleOnChange}
          />
          <InputGroup.Append>
            <Button variant='primary' type='submit'>
              Let's Go
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
    </div>
  );
};

export default Login;
