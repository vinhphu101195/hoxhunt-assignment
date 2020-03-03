// It is your job to implement this. More info in README

import React, { useState } from "react";
import styled from "styled-components";
import { HeroPopup } from "./HeroPopup";
import { HeroInfor } from "./file";

const HeroContainer = styled.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

const HeroName = styled.span`
  display: block;
  background-color: #001147;
  overflow: hidden;
  padding: 6% 8%;
  transition: background-color 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  margin-top: -10px;
  transition: background-color 0.5s;

  ${HeroContainer}:hover & {
    background-color: #113fd1;
  }
`;
const HeroNameText = styled.span`
  display: inline-block;
  text-transform: uppercase;
  color: white;
  white-space: nowrap;
  font-size: 19px;
  font-family: serif;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-overflow: ellipsis;
  transition: margin-left 0.5s;

  ${HeroContainer}:hover & {
    margin-left: 15px;
  }
`;

const HeroImageContainer = styled.span`
  position: relative;
  display: block;
  width: 100%;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    width: 11%;
    padding-top: 11%;
    background-color: rgb(255, 255, 255);
    transform: translate(50%, -50%) rotate(45deg);
    transition: right 1s;

    ${HeroContainer}:hover & {
      right: -25px;
    }
  }
`;

const HeroImage = styled.img`
  width: 300px;
  height: 350px;
  transform: scale(1.05);
  transition: transform 0.5s, opacity 0.5s;

  ${HeroContainer}:hover & {
    transform: scale(1);
  }
`;

export const HeroCard: React.FC<HeroInfor> = props => {
  const [key, setKey] = useState<boolean>(false);
  const onSetKey = (e: React.FormEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setKey(false);
  };
  return (
    <HeroContainer
      onClick={() => {
        setKey(true);
      }}
    >
      <HeroImageContainer>
        <HeroImage src={props.imgUrl} alt="hero"></HeroImage>
      </HeroImageContainer>
      <HeroName>
        <HeroNameText>{props.name}</HeroNameText>
      </HeroName>
      {key ? <HeroPopup {...props} onSetKey={onSetKey}></HeroPopup> : ""}
    </HeroContainer>
  );
};
