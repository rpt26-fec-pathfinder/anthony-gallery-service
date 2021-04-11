import styled from 'styled-components';


export const ThumbImg = styled.img`
  padding: 1px;
`

export const Wrapper = styled.div`
  margin-left: 175px;
  font-family: Noto Sans, sans-serif;


  @media (min-width: 1675px) {
    margin-left: 395px;
    margin-right: 220px;
  }
`

export const Main = styled.div`
 margin-top: -40px;

 &:hover {
    cursor: pointer;
  }
`

export const Container = styled.div`
  margin-top: -20px;
`

export const Row = styled.div`
  display: inline;
  overflow-x: scroll;
  white-space: nowrap;
  display: flex;
  cursor: pointer;
  max-width: 610px;

  &:hover {
    cursor: pointer;
  }
`

export const Col = styled.div`
  float: left;
  width: 120px;
  padding: 2px;
`

export const Grid = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
`