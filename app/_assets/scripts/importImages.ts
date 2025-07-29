import { StaticImageData } from "next/image";

export function importAll(r: __WebpackModuleApi.RequireContext): StaticImageData[] {
  return r.keys().map((key: string) => r(key) as StaticImageData);
}

export function projectImages() {

    const context = require.context(
        `../data/projects/`,
        true,
        /\.(png|jpe?g|gif|svg|webp)$/
    );

    return importAll(context);
}