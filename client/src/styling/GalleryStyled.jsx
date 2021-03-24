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
export const Prev = styled.div`
  display: inline;
  position: absolute;
  top: 35%;
  width: 50%;
  margin-top: 300px;
  color: white;
  font-weight: bold;
  font-size: 40px;
  border-radius: 0 3px 3px 0;
  margin-left: 20px;

  &:hover {
    color: white;
  }
`
export const Next = styled.div`
  display: inline;
  position: absolute;
  top: 35%;
  width: 20%;
  margin-top: 300px;
  color: white;
  font-weight: bold;
  font-size: 40px;
  border-radius: 0 3px 3px 0;
  margin-left: 850px;
`

export const NavBtn = styled.a`
  color: #54a5d4;
  background-color: #46708a;
  font-size: 15px;
  padding: 0px 15px;
  border-radius: 1.5px;
  margin-left: -20px;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: #63a0c5;
  }
`

export const ModelBackGround = styled.div`
  color: white;
  font-size: 11.5px;
  background-color: #305972;
  width: 913px;
  margin-top: -540px;
  margin-left:-10px;
  padding-bottom: 540px;
  border-radius: 5px;

  &:hover {
    cursor: default;
  }
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

export const ScreenShots = styled.div`
  color: white;
  font-size: 11.5px;
  margin: -25px 0px 0px 390px;

  &:hover {
    cursor: default;
  }
`

export const ModalImgDownload = styled.a`
&:hover {
    cursor: pointer;
    color: #54a5d4;
  }
`

export const Main = styled.div`
 margin-top: -40px;

 &:hover {
    cursor: pointer;
  }
`