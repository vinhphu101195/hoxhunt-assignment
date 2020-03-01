import React from "react";
import styled from "styled-components";
import { SkillsBarContainer } from "./SkillBar";

interface Props {
  name: string;
  imgUrl: string;
  strength: number;
  intelligence: number;
  stamina: number;
  healthpoints: number;
  mana: number;
  agility: number;
  speed: number;
}

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
`;

const PopupContentUpperSkillContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 3rem;
`;
const PopupContentUpperAvatarContainer = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 3rem;
`;

const PopupHeroImage = styled.img`
  width: 100%;
  height: 50%;
`;
const PopupContentLower = styled.div``;

export const HeroPopup: React.FC<Props> = props => {
  console.log(props);

  return (
    <PopupContainer>
      <PopupContent>
        <PopupContentUpper>
          <PopupContentUpperSkillContainer>
            <SkillsBarContainer
              title="Strength"
              index={props.strength}
            ></SkillsBarContainer>
            <SkillsBarContainer
              title="Intelligence"
              index={props.intelligence}
            ></SkillsBarContainer>
            <SkillsBarContainer
              title="Stamina"
              index={props.stamina}
            ></SkillsBarContainer>
            <SkillsBarContainer
              title="Healthpoints"
              index={props.healthpoints / 10}
            ></SkillsBarContainer>
          </PopupContentUpperSkillContainer>

          <PopupContentUpperAvatarContainer>
            <PopupHeroImage src={props.imgUrl} alt="hero"></PopupHeroImage>
          </PopupContentUpperAvatarContainer>

          <PopupContentUpperSkillContainer>
            <SkillsBarContainer
              title="Mana"
              index={props.mana / 200}
            ></SkillsBarContainer>
            <SkillsBarContainer
              title="Agility"
              index={props.agility}
            ></SkillsBarContainer>
            <SkillsBarContainer
              title="Speed"
              index={props.speed}
            ></SkillsBarContainer>
            <SkillsBarContainer
              title="Difficult"
              index={20}
            ></SkillsBarContainer>
          </PopupContentUpperSkillContainer>
        </PopupContentUpper>
        <PopupContentLower>hello2</PopupContentLower>
      </PopupContent>
      <PopupClose>&times;</PopupClose>
    </PopupContainer>
  );
};
