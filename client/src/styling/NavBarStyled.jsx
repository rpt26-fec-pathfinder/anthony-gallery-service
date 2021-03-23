import styled from 'styled-components';

export const Nav = styled.div`
  background-color:#3f7da1;
  padding: 11px;
  margin-right: 175px;
  border: 1px solid black;
  border-radius: 3px;
`

export const NavSelect = styled.a`
   position: relative;
  color: #e5e4dc;
  margin-right: 0;
  padding-right: 16px;
  text-decoration: none;

  &:after  {
    content: '';
    height: 250%;
    width: 0.5px;
    margin-top: -14px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #000000;
  }

  &:hover {
    color: black;
  }
`

export const NavSelection = styled.span`
  font-size: 14px;
  padding-left: 10px;
  padding-right: 10px;
`

export const Input = styled.input`
  background-color:#305d8a;
  line-height: 16px;
  position: absolute;
  margin-left: -230px;
  border: thin solid black;
  border-radius: 3px;
  margin-top: -7px;
  padding:.8em 0 .4em .6em;
  width: 227px;

  &::placeholder {
    color: black;
  font-style: italic;
  }

  &::-webkit-input-placeholder {
  font-size: 15px;
  color: black;
  transform:translate3d(0,-2px,0)
}
`

export const Button = styled.button`
  margin-top: -7px;
  margin-left: -32px;
  position: absolute;
  font-size: 22px;
  background-color: #3f7da1;
  color: rgb(26, 83, 100);
`