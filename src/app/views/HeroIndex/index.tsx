import * as React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";

import { TopBar } from "../../components/TopBar";
import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { HeroCard } from "../../components/HeroCard";

const HEROES_QUERY = gql`
  query {
    heroes {
      name
      imgUrl
      description
      backStory
      strength
      intelligence
      stamina
      healthpoints
      mana
      agility
      speed
      resistance
      weakness
      skills {
        name
        damage
        element
      }
    }
  }
`;

interface IHeroIndexProps {}

interface IHero {
  name: string;
  imgUrl: string;
  // extend this to match query above
  strength: number;
  intelligence: number;
  stamina: number;
  healthpoints: number;
  mana: number;
  agility: number;
  speed: number;
  skills: [{ name: string; dame: number; element: string }];
  resistance: string;
  weakness: string;
  description: string;
}

const HeroCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  align-self: center;
  @media (min-width: 1400px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 1000px) {
    flex-direction:column;
  }
`;

const handleLoading = () => <div>Loading...</div>;

const handleError = (message: string) => <div>Error! {message}</div>;

export const HeroIndex: React.FC<IHeroIndexProps> = () => {
  const {
    data: { heroes },
    error,
    loading
  } = useQuery<{ heroes: IHero[] }>(HEROES_QUERY);

  if (error) {
    return handleError(error.message);
  }

  if (loading) {
    return handleLoading();
  }

  console.log(heroes);

  return (
    <main>
      <TopBar />
      <Hero />
      <Section
        heading={"Hunter Index"}
        paragraph={`
          Professor Hoax gave us this Hunter Index -tool 
          so we can see how our heroes manage against evildoers. 
          Unfortunately he forgot to implement their HeroCards. 
          It's your job to finish his work before we can continue
          on our journey together!
        `}
      />

      {/** Improve this section. Data provided is defined on top in GraphQL query. You can decide what you use and what you dont't.*/}
      <HeroCardContainer>
        <ShowHeroes heroes={heroes}></ShowHeroes>
      </HeroCardContainer>

      <Footer />
    </main>
  );
};

const ShowHeroes = props => {
  return props.heroes.map(hero => <HeroCard key={hero.name} {...hero} />);
};
