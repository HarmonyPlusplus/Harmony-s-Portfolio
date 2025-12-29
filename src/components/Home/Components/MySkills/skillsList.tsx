import React from "react";
import { NinetyFive, Ninety, NinetyTwo, EightyEight, EightyFive, EightySeven } from "./percentage";
interface Skill {
    name: string;
    level: string;
    icon?: React.JSX.Element;
    percentage?: React.JSX.Element;
}


export const skillsList: Skill[] = [
    { icon: <i className="ri-reactjs-fill text-indigo-500 text-2xl"></i>, name: "React", level: "95% Proficiency", percentage: <NinetyFive /> },
    { icon: <i className="ri-code-s-slash-fill text-indigo-500 text-2xl"></i>, name: "TypeScript", level: "90% Proficiency", percentage: <Ninety /> },
    { icon: <i className="ri-tailwind-css-fill text-indigo-500 text-2xl"></i>, name: "Tailwind CSS", level: "92% Proficiency", percentage: <NinetyTwo /> },
    { icon: <i className="ri-movie-2-line text-indigo-500 text-2xl"></i>, name: "Framer Motion", level: "88% Proficiency", percentage: <EightyEight /> },
    { icon: <i className="ri-nextjs-fill text-indigo-500 text-2xl"></i>, name: "Next.js", level: "85% Proficiency", percentage: <EightyFive /> },
    { icon: <i className="ri-palette-line text-indigo-500 text-2xl"></i>, name: "UI/UX Design", level: "87% Proficiency", percentage: <EightySeven /> },
]