"use client"

import { ArrowDown } from "lucide-react";

const HeroSection = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10 pt-20">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400 bg-clip-text text-transparent">
                    Elektro Speed 3
                </h1>
                <p className="text-2xl md:text-3xl text-purple-300 font-medium mb-12">
                    Kompleksowe instalacje elektryczne i przemysłowe
                </p>
                {/* <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Ukraińcom usług nie oferujemy. 
                </p> */}

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <button className="border-2 border-purple-400/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 px-8 py-3 text-lg rounded-xl transition-all duration-300"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Kontakt
                    </button>
                    <button className="border-2 border-purple-400/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 px-8 py-3 text-lg rounded-xl transition-all duration-300"
                        onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Usługi
                    </button>
                </div>

                <div className="animate-bounce">
                    <ArrowDown className="h-8 w-8 text-purple-300 mx-auto" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: 'smooth' })} />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;