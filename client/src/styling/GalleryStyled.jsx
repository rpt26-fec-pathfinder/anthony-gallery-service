import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: 175px;
  font-family: Noto Sans, sans-serif;
`
export const Title = styled.h1`
  position: absolute;
  font-size: 26px;
  color: white;
  text-decoration: none;
`
export const Container = styled.div`
  margin-top: -20px;
`
export const Prev = styled.a`
  display: block;
  cursor: pointer;
  position: absolute;
  top: 35%;
  width: 20%;
  padding: 0;
  margin-top: 40px;
  color: white;
  font-weight: bold;
  font-size: 40px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
  margin-left: 20px;
`
export const Next = styled.a`
  display: block;
  cursor: pointer;
  position: absolute;
  top: 35%;
  width: 20%;
  padding: 0;
  margin-top: 40px;
  color: white;
  font-weight: bold;
  font-size: 40px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
  margin-left: 850px;
`

export const Row = styled.div`
 display: inline;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  cursor: pointer;
  max-width: 589px;

  &:hover {
    cursor: pointer;
  }
`

export const Col = styled.div`
  float: left;
  width: 120px;
  padding: 2px;
  margin-bottom: 5px;
`
export const ThumbImg = styled.img`
  padding: 1px;
`
