import projectProps from "@/app/_assets/props/ProjectProps";
import { importAll } from "@/app/_assets/scripts/importImages";

const context = require.context(
    `./`,
    false,
    /\.(png|jpe?g|gif|svg|webp)$/
);

const Images = importAll(context);

const IndustrialProjects: projectProps = {
    country: "",
    title: "Przemysłowe",
    description: "siur",
    category: "industrial",
    startYear: 2022,
    endYear: 2025,
    images: Images,
    details: ["eee leusz"]
}

export default IndustrialProjects;