import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  title: string;
  index: number;
}

interface SkillType {
  skillSize?: number;
}

const FlexContain = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkillsBar = styled.div<SkillType>`
  max-width: 75%;
  min-width: 1%
  width: ${props => props.skillSize}%;
  height: 2vh;
  background-color: #cfcfcf;
  border-radius: 3.125em;
  display: inline-block;
`;

const SkillAnimation = keyframes`
  0% {
    width: 0px;
  }
  100% {
    width: 100%;
  }
`;

const SkillsBarFill = styled.div<SkillType>`
  height: 100%;
  width: 100%;
  border-radius: 3.125em;
  background-color: #001147;

  animation: ${SkillAnimation} 2.8s ease-out;
`;

const SkillTitle = styled.p`
  font-style: italic;
  margin-bottom: 5px;
  color: #001147;
  font-family: "Montserrat";
  font-weight: 300;
  font-size: 1.5em;
  line-height: 25px;
`;

export const SkillsBarContainer: React.FC<Props> = props => {
  return (
    <FlexContain>
      <SkillTitle>{props.title}</SkillTitle>
      <SkillsBar skillSize={props.index}>
        <SkillsBarFill></SkillsBarFill>
      </SkillsBar>
    </FlexContain>
  );
};
