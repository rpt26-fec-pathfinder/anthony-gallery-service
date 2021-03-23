import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  background-color:rgba(0, 0, 0, 0.2);
  margin-top: 2px;
  margin-right: 175px;
  padding: 15px;
`

const Sign = styled.span`
  color: white;
  font-size: 10px;
`

const Message = styled.span`
  color: #bbbab3;
  font-size: 10px;
`

const SignIn = () => {
  return (
    <div>
      <Paragraph>
        <Sign >Sign in</Sign>
        <Message >&nbsp;to add this item to your wishlist, follow it, or mark it as not interested</Message>
      </Paragraph>
      <br />
      <br />
    </div >
  )
}

export default SignIn;