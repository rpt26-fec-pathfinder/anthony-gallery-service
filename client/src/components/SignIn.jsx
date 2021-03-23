import React from 'react';
import { Paragraph, Sign, Message } from '../styling/SignInStyled.jsx'


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