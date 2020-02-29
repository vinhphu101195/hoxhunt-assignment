import React from "react";
import styled from "styled-components";

interface Props {}

const PopupContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);

  z-index: 9999;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s;

  @supports (-webkit-backdrop-filter: blur(10px)) or
    (backdrop-filter: blur(10px)) {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const PopupContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 80%;
  background-color: #fff;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  display: table;
  overflow: hidden;
  opacity: 1;
  transform: translate(-50%, -50%) scale(0.9);
  transition: all 0.4s 0.2s;

  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  @media only screen and (max-width: $bp-small) {
    justify-content: center;
  }
`;

const PopupClose = styled.div`
  color: black;
  position: absolute;
  top: 3rem;
  right: 10.5rem;
  font-size: 3rem;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s;
  line-height: 1;
  z-index: 2;
`;

export const HeroPopup: React.FC<Props> = () => {
  return (
    <PopupContainer>
      <PopupContent>Hello</PopupContent>
      <PopupClose>&times;</PopupClose>
    </PopupContainer>
  );
};
