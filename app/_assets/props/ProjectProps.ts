import { StaticImageData } from "next/image";

export type projectCategory = "residential" | "corporate" | "industrial" | "telecommunication";

interface projectProps {
    title: string;
    description: string;
    country: string;
    category: projectCategory;
    startYear: number;
    endYear?: number;
    images: StaticImageData[];
    details: string[];
}

export default projectProps;