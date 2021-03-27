import styled from 'styled-components';


export const Background = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
`

export const OuterModal = styled.div`
  color: white;
  font-size: 11.5px;
  background-color: #305972;
  width: 885px;
  padding: 5px 7px 5px 7px;
  margin-top: 60px;
  margin-bottom: 300px;
  border-radius: 5px;

  @media (min-width: 1675px) {
    width: 1200px;
  }
`

export const Download = styled.a`
&:hover {
    cursor: pointer;
    color: #54a5d4;
  }
`

export const ModalImage = styled.img`
  width: 100%;
  margin-top: 10px;
  margin-bottom: -15px;
`

export const PrevBtn = styled.div`
  color: #54a5d4;
  background-color: #46708a;
  font-size: 15px;
  padding: 0px 15px;
  border-radius: 1.5px;
  width: 32px;
  margin-top: 8px;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: #63a0c5;
  }
`

export const NextBtn = styled.div`
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

export const ScreenShots = styled.div`
  color: white;
  font-size: 11.5px;
  text-align: center;
  margin-top: -12px; // 18
  `