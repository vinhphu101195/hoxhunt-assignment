import React from "react";
import styled, { keyframes } from "styled-components";
import { SkillsBarContainer } from "./SkillBar";

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
  @media only screen and (max-width: $bp-small) {
    justify-content: center;
  }
`;

const PopupClose = styled.div`
  color: black;
  position: absolute;
  top: 2.5rem;
  right: 10rem;
  font-size: 3rem;
  transition: all 0.2s;
  line-height: 1;
  z-index: 2;
  font-weight: bolder;
  transition: all 0.3s ;

  &:hover{
    color:#B22222	
    transform: scale(1.3);
  }
`;

const PopupContentUpper = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PopupContentUpperContainer = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 3rem;
`;
const PopupContentLower = styled.div``;

export const HeroPopup: React.FC<Props> = () => {
  return (
    <PopupContainer>
      <PopupContent>
        <PopupContentUpper>
          <PopupContentUpperContainer>
            <SkillsBarContainer title="Strength"></SkillsBarContainer>
            <SkillsBarContainer title="Intelligence"></SkillsBarContainer>
            <SkillsBarContainer title="Stamina"></SkillsBarContainer>
            <SkillsBarContainer title="Healthpoints"></SkillsBarContainer>
          </PopupContentUpperContainer>

          <PopupContentUpperContainer>
            <div>hello1</div>
          </PopupContentUpperContainer>

          <PopupContentUpperContainer>
            <div>hello3</div>{" "}
          </PopupContentUpperContainer>
        </PopupContentUpper>
        <PopupContentLower>hello2</PopupContentLower>
      </PopupContent>
      <PopupClose>&times;</PopupClose>
    </PopupContainer>
  );
};
