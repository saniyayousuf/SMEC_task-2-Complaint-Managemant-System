import React, { useState } from 'react';
import { Box, Button, Container, FormControl, Input, InputLabel, Stack, Typography } from '@mui/material';
import { ChakraProvider, CSSReset, Flex, Heading, Input as ChakraInput, Button as ChakraButton } from '@chakra-ui/react';
import CssBaseline from '@mui/material/CssBaseline';
import { Link, useNavigate } from 'react-router-dom';
import { FbLogin } from '../../../Config/Firebase/FirebaseMethods';



interface LoginProps {
  useMUI: boolean;
}

const Login: React.FC<LoginProps> = ({ useMUI }) => {
  const navigate = useNavigate()
  const [model, setModel] = useState<any>({});

  const fillModel = (key: string, val: any) => {
    model[key] = val
    setModel({ ...model })


  }

  const LoginUser = () => {

    console.log(model)
    FbLogin(model).then((res) => {
      console.log(res)
      navigate('/student-dashboard')
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <Container sx={{ bgcolor: '#cfe8fc', height: '400px', marginTop: '30px', borderRadius: '20px', paddingTop: '50px' }} maxWidth="sm">
      <CssBaseline />
      <Container maxWidth="sm">
        {useMUI ? (
          <Stack spacing={3}>
            <Typography sx={{ fontWeight: 'bold', fontFamily: 'sans-serif ' }} variant="h4">Login </Typography>
            <FormControl fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input value={model.email} onChange={(e) => fillModel("email", e.target.value)} id="email" type="email" />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input value={model.password} onChange={(e) => fillModel("password", e.target.value)} id="password" type="password" />
            </FormControl>
            <Button
              onClick={LoginUser}
              sx={{ fontSize: '1em', borderRadius: '10px', letterSpacing: '2px' }} variant="contained" color="primary">
              Login
            </Button>
            <div className="text-center ">
              <p className='fw-bold '> Don't have an Account <Link className='btn rounded-pill ' to='/signup'>Register </Link></p>
            </div>
          </Stack>
        ) : (
          <ChakraProvider>
            <CSSReset />
            <Flex direction="column" alignItems="center" justifyContent="center" height="100vh">
              <Heading as="h4" size="lg" mb={4}>
                Login (Chakra UI)
              </Heading>
              <ChakraInput placeholder="Username" mb={4} />
              <ChakraInput type="password" placeholder="Password" mb={4} />
              <ChakraButton colorScheme="blue">Login</ChakraButton>
            </Flex>
          </ChakraProvider>
        )}
      </Container>
    </Container>
  );
};

export default Login;