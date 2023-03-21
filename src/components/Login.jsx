import { useEffect, useState } from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import NavBar from './Navbar';
import { signInWithEmail } from '../server/supabase-controllers/auth';
import { useNavigate } from 'react-router-dom';
import storage from '../utils/storage';
import { toast } from 'react-hot-toast';
import Footer from './Footer';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const navigate = useNavigate();

  const handleShowClick = () => setShowPassword(!showPassword);

  useEffect(() => {
    if (email === '' && password === '') {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [email, password]);

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await signInWithEmail(email, password);
    const { user, session } = data;
    if (error) {
      setLoading(false);
      toast.error(error.message)
    }

    if (user) {
      setLoading(false);
      storage.session.set("auth", session)
      navigate('/transcribe');
      toast.success("Logged in successfully!!")
    }

    return data;
  };

  return (
    <Box>
      <NavBar />
      <Flex
        flexDirection="column"
        width="100wh"
        height="80vh"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="teal.500" />
          <Heading color="teal.400">Welcome</Heading>
          <Box minW={{ base: '90%', md: '468px' }}>
            <form>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input type="email" placeholder="email address" onChange={handleEmailChange} />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      onChange={handlePasswordChange}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText textAlign="right">
                    <Link>forgot password?</Link>
                  </FormHelperText>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                  isDisabled={disableButton}
                  isLoading={loading}
                  loadingText="Logging in..."
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
        <Box>
          New to us?{' '}
          <Link color="teal.500" href="#">
            Sign Up
          </Link>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Login;
