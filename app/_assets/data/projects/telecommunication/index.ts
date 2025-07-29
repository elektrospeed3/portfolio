import projectProps from "@/app/_assets/props/ProjectProps";
import { importAll } from "@/app/_assets/scripts/importImages";

const context = require.context(
    `./`,
    false,
    /\.(png|jpe?g|gif|svg|webp)$/
);

const Images = importAll(context);

const TelecommunicationProjects: projectProps = {
    country: "",
    title: "Teletechniczne",
    description: "siur",
    category: "telecommunication",
    startYear: 2022,
    endYear: 2025,
    images: Images,
    details: ["eee leusz"]
}

export default TelecommunicationProjects;