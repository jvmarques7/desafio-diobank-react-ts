import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { login } from './services/login';
import { Card } from './components/Card';
import { Layout } from './components/Layout';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Layout>  
          <Card>
            <Center paddingBottom='2em' color={'white'}>
              <h1>Seu banco tecnológico!</h1>
            </Center>
            <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
              <Center>
                <h1>Faça o login</h1>
              </Center>
              <Input placeholder="email" />
              <Input placeholder="password" />
              <Center>
                <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
                  Button
                </Button>
              </Center>
            </Box>
          </Card>
        </Layout>
      </Box>
    </ChakraProvider>
  );
}

export default App;
