import { 
  Center,
  Input,
  Box,
  ChakraProvider
} from '@chakra-ui/react'
import { login } from './services/login';
import { Card } from './components/Card';
import { Layout } from './components/Layout';
import CButton from './components/CButton';

function App() {
  return (
    <ChakraProvider>
      <Layout>
      <Box padding="25px">
          <Card>
            <Center>
              <h1>Faça o login</h1>
            </Center>
            <Input placeholder="email" />
            <Input placeholder="password" type='password'/>
            <Center>
              <CButton onClick={() => login()}/>
            </Center>
          </Card>
        </Box>
    </Layout>
    </ChakraProvider>
  );
}

export default App;
