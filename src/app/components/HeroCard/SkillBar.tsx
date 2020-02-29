import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  title: string;
}

interface SkillType {
  skillSize?: string;
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
    width: ${props => props.skillSize};
  }
`;

const SkillsBarFill = styled.div<SkillType>`
  height: 100%;
  width: ${props => props.skillSize};
  border-radius: 3.125rem;
  background-color: #001147;

  animation: ${SkillAnimation} 3s ease-out;
`;

export const SkillsBarContainer: React.FC<Props> = props => {
  return (
    <FlexContain>
      {props.title}
      <SkillsBar>
        <SkillsBarFill skillSize="80%"></SkillsBarFill>
      </SkillsBar>
    </FlexContain>
  );
};
