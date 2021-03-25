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
  text-align: center;
  margin-top: -18px;
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

export const Blackout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: fixed;
  justify-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
`

export const ModalBackGround = styled.div`
  color: white;
  font-size: 11.5px;
  background-color: #305972;
  width: 885px;
  padding: 5px 7px 5px 7px;
  margin-top: 60px;
  margin-bottom: 70px;
  border-radius: 5px;
`

export const Image = styled.img`
  width: 100%;
  margin-top: 10px;
  margin-bottom: -15px;
`

export const PrevBtn = styled.a`
  color: #54a5d4;
  background-color: #46708a;
  font-size: 15px;
  padding: 0px 15px;
  border-radius: 1.5px;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: #63a0c5;
  }
`

export const NextBtn = styled.a`
position: relative;
  float: right;
  color: #54a5d4;
  background-color: #46708a;
  font-size: 15px;
  padding: 0px 15px;
  border-radius: 1.5px;
  margin-top: -19px;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: #63a0c5;
  }
`
