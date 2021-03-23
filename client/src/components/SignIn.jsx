import React from 'react';
import styled from 'styled-components';

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
      <p style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', marginRight: '175px', padding: '15px' }}>
        <Sign >Sign in</Sign>
        <Message >&nbsp;to add this item to your wishlist, follow it, or mark it as not interested</Message>
      </p>
      <br />
      <br />
    </div >
  )
}

export default SignIn;