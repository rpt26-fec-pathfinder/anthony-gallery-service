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
  display: block;
  cursor: pointer;
  position: absolute;
  top: 35%;
  width: 50%;
  /* padding-right: 00px; */
  margin-top: 300px;
  color: white;
  font-weight: bold;
  font-size: 40px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
  margin-left: 20px;
`
export const Next = styled.div`
  display: block;
  cursor: pointer;
  position: absolute;
  top: 35%;
  width: 20%;
  padding: 0;
  margin-top: 300px;
  color: white;
  font-weight: bold;
  font-size: 40px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
  margin-left: 850px;
`

export const NavBtn = styled.a`
  color: #54a5d4;
  background-color: #46708a;
  font-size: 15px;
  padding: 0px 15px;
  border-radius: 1.5px;
  margin-left: -20px;
`

export const ModelBackGround = styled.div`
  color: white;
  font-size: 11.5px;
  background-color: #305972;
  width: 910px;
  /* margin-top: -400px; */
  margin-top: -540px;
  margin-left:-10px;
  padding-bottom: 540px;
  border-radius: 5px;
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

export const ScreenShots = styled.p`
  color: white;
  font-size: 11.5px;
  margin: 5px 0px 0px 385px;
`


export const ModalImgDownload = styled.a`
&:hover {
    cursor: pointer;
    color: #54a5d4;
  }
`
