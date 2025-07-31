"use client"

import { Check, ChevronLeft, ChevronRight, Factory, Loader2 } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/Carousel";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";
import Image, { ImageProps, StaticImageData } from "next/image";
import projects from "@/app/_assets/data/projects";
import ProjectCarousel from "./c/ProjectCarousel";

const PortfolioSection = () => {
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomProps, setZoomProps] = useState<{src: StaticImageData, alt: string}>();

    useEffect(() => {
        if(isZoomed) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isZoomed]);

    const toggleZoom = (src: StaticImageData, alt: string) => {
        setIsZoomed(!isZoomed);

        setZoomProps({ src: src, alt: alt });
    };
    const closeZoom = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsZoomed(false);
    }
    
    const getCategoryColor = (category: string) => {
        switch(category) {
            case "corporate": return "bg-blue-500/20 text-blue-300 border-blue-500/40";
            case "residential": return "bg-green-500/20 text-green-300 border-green-500/40";
            case "industrial": return "bg-orange-500/20 text-orange-300 border-orange-500/40";
            default: return "bg-gray-500/20 text-gray-300 border-gray-500/40";
        }
    }

    // const nextImage = (projectIndex: number, imageCount: number) => {
    //     setCurrentImageIndex(prev => ({
    //         ...prev,
    //         [projectIndex]: ((prev[projectIndex] || 0) + 1) % imageCount
    //     }));
    // };
    // const prevImage = (projectIndex: number, imageCount: number) => {
    //     setCurrentImageIndex(prev => ({
    //         ...prev,
    //         [projectIndex]: ((prev[projectIndex] || 0) - 1 + imageCount) % imageCount
    //     }));
    // };

    return (
        <section id="portfolio" className="py-20 bg-slate-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Nasze realizacje
                    </h2>
                    <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8" />
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Przedstawiamy wybrane projekty, które zrealizowaliśmy dla Naszych klientów
                    </p>
                </div>

                {isZoomed && (
                    <div
                        className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 cursor-zoom-out"
                        onClick={closeZoom}
                    >
                        <div className="absolute inset-0 flex items-center justify-center mb-12 mt-12">
                            <div>
                                <Loader2 className="w-12 h-12 animate-spin text-white" />
                            </div>
                            <Image 
                                fill
                                className="object-contain w-full h-full"
                                style={{
                                    transform: `scale(1)`,
                                }}
                                alt={zoomProps!.alt}
                                src={zoomProps!.src}
                                quality={100}
                                priority
                            />
                        </div>

                        <button
                            onClick={closeZoom}
                            className="absolute top-4 right-4 text-white text-3xl bg-black/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/75 transition-all"
                            aria-label="Zamknij przybliżenie"
                        >
                            &times;
                        </button>
                    </div>
                )}

                <div className="text-center mb-2">
                    <h2 className="text-4xl font-bold text-white">Instalacje przemysłowe</h2>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <ProjectCarousel projects={projects} category="industrial" action={toggleZoom} />
                </div>

                <div className="text-center mb-2">
                    <h2 className="text-4xl font-bold text-white">Instalacje elektryczne</h2>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <ProjectCarousel projects={projects} category="residential" action={toggleZoom} />
                </div>

                <div className="text-center mb-2">
                    <h2 className="text-4xl font-bold text-white">Instalacje teletechniczne</h2>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <ProjectCarousel projects={projects} category="telecommunication" action={toggleZoom} />
                </div>

                <div className="text-center mb-12 mt-12">
                    <div className="bg-slate-900/50 rounded-lg p-8 max-w-4xl mx-auto border border-yellow-400/20">
                        <h3 className="text-2xl font-bold text-white mb-4">Potrzebujesz podobnego rozwiązania?</h3>
                        <p className="text-slate-300 mb-6">
                            Każdy projekt traktujemy indywidualnie pod względem Twoich potrzeb.
                        </p>
                        <button
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-yellow-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                        >
                            Zapytaj o wycenę
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PortfolioSection;