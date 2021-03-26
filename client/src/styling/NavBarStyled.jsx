import styled from 'styled-components';


export const Grid = styled.div`
  display: grid;
  grid-template-columns: 11% 9% 10% 7% 10% 53%;
`

export const Input = styled.input`
  background-color:#305d8a;
  margin-left: 180px;
  border: thin solid black;
  border-radius: 3px;
  margin-top: 2.4px;
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
  margin-top: 3px;
  margin-left: -36px;
  position: absolute;
  font-size: 20px;
  background-color: #3f7da1;
  color: rgb(26, 83, 100);
`

export const Select = styled.a`
  border-right: 1px solid black;
  padding: 10px;
  text-align: center;
  color: white;
  font-size: 14px;
  color: #e5e4dc;
  background-color: #3f7da1;
  transition: 0.4s;

  &:hover {
    cursor: pointer;
    color: black;
    background-color: #c0cbd1;
  }
`

export const SearchBar = styled.span`
  margin-right: 175px;
  background-color: #3f7da1;
`

