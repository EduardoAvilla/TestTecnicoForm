import * as React from 'react'
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <div className="App">
   <Form></Form>
    </div>
    </ChakraProvider>
  );
}

export default App;
