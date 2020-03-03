export interface HeroInfor {
    name: string;
    imgUrl: string;
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