import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  margin-right: 175px;
  float: right;
  padding: 8px 25px;
  font-size: 14px;
  font-weight: bold;
  color: #94c6e2;
  background-color:#305d8a;
  border-radius: 3px;

  &:hover {
    color: cursor: pointer;
    color: white;
    background-color:#72a3d4;
  }
`

const HubButton = () => {
  return (
    <div>
      <br />
      <Button>Community Hub</Button>
      <br />
      <br />
      <br />
    </div>
  )
}

export default HubButton;