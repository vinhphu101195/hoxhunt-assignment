import React, { createContext, useContext, useState } from "react";
import styled, { keyframes } from "styled-components";

const PopupContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  @supports (-webkit-backdrop-filter: blur(10px)) or
    (backdrop-filter: blur(10px)) {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.3);
  }

  font-size: 95%;
  @media (max-width: 1000px) {
    font-size: 75%;
  }
  @media (max-width: 800px) {
    font-size: 55%;
  }
  @media (max-width: 500px) {
    font-size: 35%;
  }
`;
const PopupAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.25);
  }
  100% {
    transform: translate(-50%, -50%) scale(0.9);
  }
`;

const PopupContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 85%;
  height: 85%;
  background-color: #fff;
  box-shadow: 0 2em 4em rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  overflow: hidden;
  animation: ${PopupAnimation} 2s ease-out;
  transform: translate(-50%, -50%) scale(0.9);
  transition: all 0.4s 0.2s;

  padding: 3.5em;
  display: flex;
  flex-direction: column;
`;

export const PopupContext = createContext<{
  openPopup: (node: React.ReactNode) => void;
  closePopup: () => void;
}>({
  openPopup: () => {},
  closePopup: () => {}
});

export default function PopupProvider(props) {
  const [node, setNode] = useState<React.ReactNode>(null);

  const closePopup = (): void => {
    setNode(null);
  };

  const openPopup = (node: React.ReactNode) => {
    setNode(node);
  };

  return (
    <PopupContext.Provider value={{ openPopup, closePopup }}>
      {node !== null ? (
        <PopupContainer>
          <PopupContent>{node}</PopupContent>
        </PopupContainer>
      ) : null}
      {props.children}
    </PopupContext.Provider>
  );
}

export const usePopup = () => {
  return useContext(PopupContext);
};
