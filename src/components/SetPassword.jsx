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
  Text,
} from '@chakra-ui/react';
import { FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { ANON_KEY, SUPABASE_PROJECT_URL } from '../enums';
import getAccessToken from '../utils/getAccessToken';


const CFaLock = chakra(FaLock);

const SetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const navigate = useNavigate();

  const handleShowClick = () => setShowPassword(!showPassword);

  useEffect(() => {
    if (password === '') {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [password]);

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const accessToken = getAccessToken();
    const response = await axios.put(
      `${SUPABASE_PROJECT_URL}/auth/v1/user`,
      { password },
      { headers: { apiKey: ANON_KEY, Authorization: `Bearer ${accessToken}` } }
    );
    setLoading(false);
    if (response.status === 200) {
      navigate('/login');
      toast.success("Password set successfully, please login")
    }else{
      toast.error("Error setting your password")
    }
  };

  return (
    <Box>
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
          <Heading mb="24" color="teal.400">
            Audio Transcription Solution
          </Heading>
          <Avatar bg="teal.500" />
          <Text fontSize="2xl" color="teal.400">
            Set your password
          </Text>
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
                  isLoading={loading}
                  loadingText="setting password"
                  isDisabled={disableButton}
                  onClick={handlePasswordUpdate}
                >
                  Set Password
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default SetPassword;
