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

const SkillsBar = styled.div`
  width: 70%
  height: 8px;
  background-color: #cfcfcf;
  border-radius: 3.125rem;
  display: inline-block;
`;

const SkillAnimation = keyframes`
  0% {
    width: 0px;
  }
  100% {
    width: ${props => props.skillSize}%;
  }
`;

const SkillsBarFill = styled.div<SkillType>`
  height: 100%;
  width: ${props => props.skillSize}%;
  border-radius: 3.125rem;
  background-color: #001147;

  animation: ${SkillAnimation} 3s ease-out;
`;

const SkillTitle = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 5px;
  color: #001147;
`;

export const SkillsBarContainer: React.FC<Props> = props => {
  return (
    <FlexContain>
      <SkillTitle>{props.title}</SkillTitle>
      <SkillsBar>
        <SkillsBarFill skillSize={props.index}></SkillsBarFill>
      </SkillsBar>
    </FlexContain>
  );
};
