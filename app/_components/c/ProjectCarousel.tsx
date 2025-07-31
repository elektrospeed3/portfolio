import projectProps, { projectCategory } from "@/app/_assets/props/ProjectProps";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/Carousel";
import { Card } from "../ui/Card";
import Image from "next/image";

type ProjectCarouselProps = {
    projects: projectProps[];
    category: projectCategory;
    action: any;
}

function ProjectCarousel({ projects, category, action }: ProjectCarouselProps) {
    return (
        <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent className="-ml-2 md:-ml-4 mt-7 mb-7">
                {projects.map((project, index) => (<>
                {project.category === category ? (<>
                    {project.images.map((image, i) => (
                    <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3" key={i}>
                            <Card className="bg-slate-700/50 border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden h-150">
                                <div className="relative h-full overflow-hidden group">
                                    <Image 
                                        src={image}
                                        alt={project.title}
                                        className="cursor-pointer w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                        onClick={() => action(image, project.title)}
                                    />
                                </div>
                            </Card>
                    </CarouselItem>
                    ))}
                </>) : (<></>)}
                </>))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-slate-700/80 border-yellow-400/30 text-yellow-400 hover:bg-slate-600/80 hover:border-yellow-400/60 cursor-pointer" />
            <CarouselNext className="hidden md:flex -right-12 bg-slate-700/80 border-yellow-400/30 text-yellow-400 hover:bg-slate-600/80 hover:border-yellow-400/60 cursor-pointer" />
        </Carousel>
    );
}

export default ProjectCarousel;