import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";
import { SkillsBarContainer } from "./SkillBar";
import { HeadingTwo, HeadingThree, Paragraph } from "../Typography/index";
import { HeroInfor } from "./file";
import { usePopup } from "../popupProvider/index";

const PopupClose = styled.div`
  color: black;
  position: absolute;
  top: -2rem;
  right: 0;
  font-size: 3em;
  line-height: 1;
  z-index: 2;
  font-weight: bolder;
  transition: all 0.3s;

  &:hover{
    color:#B22222	
    transform: scale(1.3);
    cursor:pointer;
  }
  @media (max-width: 800px) {
    top: 0rem;
  }
`;

const PopupContentUpper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  position: relative;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const PopupContentUpperSkillContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  padding-bottom: 3em;
  margin-top: 1.5em;

  @media (max-width: 800px) {
    display: none;
  }
`;
const PopupContentUpperAvatarContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-bottom: 3em;
  @media (max-width: 800px) {
    width: 60%;
    padding-bottom: 0;
    margin: 0 auto;
    margin-top: 4em;
  }
  @media (max-width: 500px) {
    width:100%
    margin:auto;
    margin-top: 6em;
  }
`;

const PopupHeroImage = styled.img`
  width: 75%;
  @media (max-width: 800px) {
    margin: 0 auto;
  }
`;
const PopupHeroSpecial = styled.p`
  margin: 1em auto;
  font-size: 18px;
  font-style: italic;
`;
const PopupHeroName = styled.div`
  position: absolute;
  right: 25%;
  top: -3em;
  @media (max-width: 800px) {
    right: 42%;
  }
`;
const PopupContentLower = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const PopupHeroInfor = styled.div`
  width: 40%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const PopupHeroStory = styled(Paragraph)`
  width: 60%;
  padding: 2em;
  margin: auto;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0;
    margin-top: 2em;
    font-size: 0.75em;
  }
  @media (max-width: 700px) {
    font-size: 0.45em;
  }
`;

const CustomTable = styled.table`
  width: 100%;
  font-size: 1.15em;
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

export const HeroPopup: React.FC<HeroInfor> = props => {
  const { closePopup } = usePopup();

  return (
    <Fragment>
      <PopupContentUpper>
        <PopupClose onClick={closePopup}>&times;</PopupClose>
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
            title="Speed"
            index={props.speed}
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
            title="Healthpoints"
            index={props.healthpoints / 10}
          ></SkillsBarContainer>
        </PopupContentUpperSkillContainer>
      </PopupContentUpper>
      <PopupContentLower>
        <PopupHeroInfor>
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
        </PopupHeroInfor>
        <PopupHeroStory>{props.description}</PopupHeroStory>
      </PopupContentLower>
    </Fragment>
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
