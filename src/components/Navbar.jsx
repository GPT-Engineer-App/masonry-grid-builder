import { Box, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

function Navbar() {
  return (
    <Flex bg="gray.100" p="4" align="center">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FaSearch color="gray.300" />
        </InputLeftElement>
        <Input type="text" placeholder="Search..." />
      </InputGroup>
    </Flex>
  );
}

export default Navbar;