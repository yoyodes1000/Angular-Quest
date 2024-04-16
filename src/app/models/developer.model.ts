import { Skill } from "./skill.model";

export type Developer = {
    firstName : string;
    lastName : string;
    age : number;
    gender : string;
    bio : string;
    skill : Skill[];
}