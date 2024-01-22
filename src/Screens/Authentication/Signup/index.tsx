import React, { useState } from 'react';
import { Box, Button, Container, FormControl, Input, InputLabel, Stack, Typography } from '@mui/material';
import { ChakraProvider, CSSReset, Flex, Heading, Input as ChakraInput, Button as ChakraButton } from '@chakra-ui/react';
import CssBaseline from '@mui/material/CssBaseline';
import { Link, useNavigate } from 'react-router-dom';
import { fbSignup } from '../../../Config/Firebase/FirebaseMethods';



interface LoginProps {
  useMUI: boolean;
}

const Signup: React.FC<LoginProps> = ({ useMUI }) => {
  const [model, setModel] = useState<any>({});
  const navigate = useNavigate()

  const fillModel = (key: string, val: any) => {
    model[key] = val
    setModel({ ...model })
  }

  const signupUser = () => {
    console.log(model)
    fbSignup(model)
    .then((res) => {
      navigate('/login')
    }).catch((err) => {
      console.log(err)

    })
  }


  return (
    <Container
      sx={{ bgcolor: '#cfe8fc', height: '440px', marginTop: '30px', borderRadius: '20px', paddingTop: '50px' }} maxWidth="sm">
      <CssBaseline />
      <Container maxWidth="sm">
        {useMUI ? (
          <Stack spacing={3}>
            <Typography sx={{ fontWeight: 'bold', fontFamily: 'sans-serif ' }} variant="h4">Signup </Typography>
            <FormControl fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input value={model.email} onChange={(e) => fillModel("email", e.target.value)} id="Email" type="email" />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="username">Username </InputLabel>
              <Input value={model.userName} onChange={(e) => fillModel("userName", e.target.value)} id="username " type="text" />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input value={model.password} onChange={(e) => fillModel("password", e.target.value)} id="password" type="password" />
            </FormControl>

            <Button
              onClick={signupUser}
              sx={{ fontSize: '1em', borderRadius: '10px', letterSpacing: '2px' }}
              variant="contained"
              color="primary">
              Signup
            </Button>
            <div className="text-center ">
              <p className='fw-bold '>Have an Account <Link className='btn rounded-pill ' to='/login'>Login</Link></p>
            </div>
          </Stack>
        ) : (
          <ChakraProvider>
            <CSSReset />
            <Flex direction="column" alignItems="center" justifyContent="center" height="100vh">
              <Heading as="h4" size="lg" mb={4}>
                Signup (Chakra UI)
              </Heading>
              <ChakraInput placeholder="Username" mb={4} />
              <ChakraInput type="password" placeholder="Password" mb={4} />
              <ChakraButton colorScheme="blue">Signup</ChakraButton>

            </Flex>
          </ChakraProvider>
        )}
      </Container>
    </Container>
  );
};

export default Signup;