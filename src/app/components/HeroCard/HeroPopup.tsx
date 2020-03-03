import React from "react";
import styled, { keyframes } from "styled-components";
import { SkillsBarContainer } from "./SkillBar";
import { HeadingTwo, HeadingThree, Paragraph } from "../Typography/index";
import { HeroInfor } from "./file";

interface Props extends HeroInfor {
  onSetKey: (e: React.FormEvent<HTMLDivElement>) => void;
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
  transition: all 0.5s;

  @supports (-webkit-backdrop-filter: blur(10px)) or
    (backdrop-filter: blur(10px)) {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.3);
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
  width: 80%;
  height: 80%;
  background-color: #fff;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  display: table;
  overflow: hidden;
  opacity: 1;
  animation: ${PopupAnimation} 2s ease-out;
  transform: translate(-50%, -50%) scale(0.9);
  transition: all 0.4s 0.2s;

  padding: 3.5rem;
  display: flex;
  flex-direction: column;
`;

const PopupClose = styled.div`
  color: black;
  position: absolute;
  top: -2rem;
  right: 0rem;
  font-size: 3rem;
  transition: all 0.2s;
  line-height: 1;
  z-index: 2;
  font-weight: bolder;
  transition: all 0.3s ;

  &:hover{
    color:#B22222	
    transform: scale(1.3);
    cursor:pointer;
  }
`;

const PopupContentUpper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  position: relative;
`;

const PopupContentUpperSkillContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 3rem;
  margin-top: 1.5rem;
`;
const PopupContentUpperAvatarContainer = styled.div`
  width: 50%;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
`;

const PopupHeroImage = styled.img`
  width: 75%;
`;
const PopupHeroSpecial = styled.p`
  margin: 1rem auto;
  font-size: 18px;
  font-style: italic;
`;
const PopupHeroName = styled.div`
  position: absolute;
  right: 25%;
  top: -3rem;
`;
const PopupContentLower = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CustomTable = styled.table`
  width: 100%;
  font-size: 1.15rem;
  &&& {
    th,
    td {
      padding: 2px 3px;
      text-align: left;
      border-bottom: 1.5px solid #ddd;
    }
    table {
      border-collapse: collapse;
    }
  }
`;

export const HeroPopup: React.FC<Props> = props => {
  return (
    <PopupContainer>
      <PopupContent>
        <PopupContentUpper>
          <PopupClose onClick={props.onSetKey}>&times;</PopupClose>
          <PopupHeroName>
            <HeadingTwo>{props.name}</HeadingTwo>
          </PopupHeroName>
          <PopupContentUpperAvatarContainer>
            <PopupHeroImage src={props.imgUrl} alt="hero"></PopupHeroImage>
            <PopupHeroSpecial>
              Resistance: {props.resistance} | Weakness: {props.weakness}
            </PopupHeroSpecial>
          </PopupContentUpperAvatarContainer>
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
          </PopupContentUpperSkillContainer>
        </PopupContentUpper>
        <PopupContentLower>
          <div style={{ width: "40%" }}>
            <HeadingThree style={{ color: "#001147" }}>Ability</HeadingThree>
            <CustomTable>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Dame</th>
                  <th>Element</th>
                </tr>
              </thead>
              <tbody>
                <ShowSkills skills={props.skills}></ShowSkills>
              </tbody>
            </CustomTable>
          </div>
          <div style={{ width: "60%", padding: "2rem" }}>
            <Paragraph>{props.description}</Paragraph>
          </div>
        </PopupContentLower>
      </PopupContent>
    </PopupContainer>
  );
};

const ShowSkills = props => {
  return props.skills.map((skill, index) => {
    return (
      <tr key={index}>
        <td>{skill.name}</td>
        <td>{skill.damage}</td>
        <td>{skill.element}</td>
      </tr>
    );
  });
};
