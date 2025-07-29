import { StaticImageData } from "next/image";

import IndustrialProjects from "./industrial";
import projectProps from "../../props/ProjectProps";
import ResidentialProjects from "./residential";
import TelecommunicationProjects from "./telecommunication";

const projects: projectProps[] = [
    IndustrialProjects,
    ResidentialProjects,
    TelecommunicationProjects
];

const sortedProjects = projects.toSorted((a, b) => a.startYear - b.startYear).reverse();

export default sortedProjects;