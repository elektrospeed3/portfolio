import projectProps from "@/app/_assets/props/ProjectProps";
import { importAll } from "@/app/_assets/scripts/importImages";

const context = require.context(
    `./`,
    false,
    /\.(png|jpe?g|gif|svg|webp)$/
);

const HeraeusImgs = importAll(context);

const Heraeus: projectProps = {
    country: "Hanau, Niemcy",
    title: "Heraeus Precious Metals GmbH",
    description: "Alarmy co chwila",
    category: "industrial",
    startYear: 2024,
    images: HeraeusImgs,
    details: ["Unikanie BHP'owca", "Wymyślanie planu na przemyt złota", "Męczenie Ali'ego, aby w końcu dał opisy na urządzenia"]
}

export default Heraeus;