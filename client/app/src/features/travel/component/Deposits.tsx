import * as React from 'react';
import Title from './Title';
import { Text } from '../../global/styled-component/p.styled';
import { StyledLink } from '../../global/styled-component/link.styled';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Text size="15px" ><h1>$3,024.00</h1>
        
      </Text>
      <Text size='20px' color="text.secondary" >
        on 15 March, 2019
      </Text>
 
        <StyledLink color="primary" href="#" onClick={preventDefault}>
          View balance
        </StyledLink>
    
    </React.Fragment>
  );
}