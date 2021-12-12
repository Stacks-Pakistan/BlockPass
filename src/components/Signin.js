import React from 'react';
import { Box, Text, Button } from '@blockstack/ui';
import { authenticate } from '../auth';

export const Signin = () => {
  return (
    <Box width="100%" textAlign="center">
      <Box maxWidth="800px" mx="auto" mt={[6, '100px']}>
        <Text fontWeight="700" fontSize={['36px', '50px']} lineHeight={1} display="block">
          Password Manager
        </Text>
        <Box mt={[5, '60px']}>
          <Button onClick={() => authenticate()}>Start by Logging into Hiro Wallet</Button>
        </Box>
      </Box>
    </Box>
  );
};