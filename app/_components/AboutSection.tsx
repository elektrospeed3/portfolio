'use client'

import { Award, Check, Euro, Users } from "lucide-react";
import { Card, CardContent } from "./ui/Card";
import sortedProjects from "../_assets/data/projects";
import { useEffect, useState } from "react";
import Image from "next/image";

import Marcin4007 from "@assets/data/projects/anothers/59a1f93e-d950-4310-9220-c7c375230cd3.jpg";

const AboutSection = () => {
    const [realisedProject, setRealisedProject] = useState(0);
    const yearStart = new Date().getFullYear() - new Date("2018").getFullYear();

    useEffect(() => {
        sortedProjects.forEach((project, index) => {
            if(project.endYear) setRealisedProject(realisedProject + 1);
        });
    }, []);

    const stats = [
        { icon: <Users className="h-8 w-8" />, number: yearStart, label: "Lat doświadczenia" },
        { icon: <Check className="h-8 w-8" />, number: realisedProject, label: "Zrealizowanych projektów" },
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Kim jesteśmy?
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
                    {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Specjalizujemy się w kompleksowym wykonastwie instalacyjnym i przemysłowym.
                    </p> */}
                </div>

                {/* md:grid-cols-2 */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        {/* <h3 className="text-3xl font-bold mb-6 text-white">Nasze doświadczenie</h3> */}
                        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                            Od ponad {yearStart} lat świadczymy profesjonalne usługi elektryczne. 
                            Działamy kompleksowo – od projektu po odbiór, gwarantując bezpieczeństwo, 
                            terminowość i zgodność z normami.
                            Zajmujemy się projektowaniem, wykonywaniem i konserwacją instalacji elektrycznych, diagnozowaniem usterek, 
                            montażem rozdzielnic i zabezpieczeń osprzętu elektrycznego, pomiary elektryczne i kontrola poprawności działania instalacji. 
                            Możemy pracować jednakowo przy niskim jak i średnim napięciu.
                        </p>
                        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                            Nasz zespół składa się z wykwalifikowanych elektryków z uprawnieniami SEP i wieloletnim doświadczeniem.
                            Z naszą elastyczną współpracą dostosujemy się do wymagań Twojego projektu.
                        </p>
                        {/* <div className="flex items-center space-x-4 text-purple-400">
                            <span className="font-semibold">Profesjonalizm na każdym styku 😎👌</span>
                        </div> */}
                    </div>

                    <div className="gap-6">
                        <div className=" text-center md:ml-10 md:mr-10 flex justify-center">
                            <Image className="w-auto h-1/2 rounded-2xl border border-purple-400/20" src={Marcin4007} alt="siur" />
                        </div>
                    </div>

                    {/* <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
                        {stats.map((stat, index) => (
                            <Card key={index} className="md:ml-30 md:mr-30 bg-slate-700/30 border border-purple-400/20 text-center backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 hover:shadow-xl shadow-purple-400/10">
                                <CardContent className="p-6">
                                    <div className="text-purple-400 mb-4 flex justify-center">
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                                    <div className="text-gray-300 text-sm">{stat.label}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default AboutSection;