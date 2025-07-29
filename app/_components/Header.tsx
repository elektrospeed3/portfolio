"use client"
import React, { SVGProps } from "react";
import { useState } from "react";
import XIcon from "./svg/XIcon";

import ElectricalIcon from "@assets/svg/electrical.svg";
import MIcon from "@assets/svg/menu.svg";
import { PlugZap } from "lucide-react";

const Header = () => {
    const [isToolbar, setIsToolbar] = useState(false);
    const toggleToolbar = () => setIsToolbar(!isToolbar);

    return (
        <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md z-50 border-b border-white/10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-2 rounded-xl">
                        <PlugZap className="h-6 w-6 text-amber-300 animate-pulse delay-10" />
                        {/* <span className="h-6 w-6 text-white animate-pulse">🗲</span> */}
                    </div>
                    <div>
                        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                            Elektro Speed
                        </h1>
                        <p className="text-xs text-purple-300 italic">Z nami prąd płynie szybciej!</p>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <a href="#" className="text-gray-200 hover:text-purple-300 transition-colors font-medium">Strona główna</a>
                    <a href="#about" className="text-gray-200 hover:text-purple-300 transition-colors font-medium">O nas</a>
                    <a href="#services" className="text-gray-200 hover:text-purple-300 transition-colors font-medium">Usługi</a>
                    <a href="#portfolio" className="text-gray-200 hover:text-purple-300 transition-colors font-medium">Portfolio</a>
                    <a href="#contact" className="text-gray-200 hover:text-purple-300 transition-colors font-medium">Kontakt</a>
                </div>

                {/* Mobile Menu */}
                <button className="md:hidden text-gray-200 hover:text-purple-300 transition-colors" onClick={toggleToolbar}>
                    { isToolbar
                    ? <XIcon className="h-6 w-6 text-gray-200" />
                    : <MIcon className="h-6 w-6" />
                    }
                </button>
            </div>

            { isToolbar && (
                <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10">
                    <div className="px-4 py-4 space-y-4">
                        <a href="" className="block text-gray-200 hover:text-purple-300 transition-colors font-medium" onClick={() => setIsToolbar(false)}>Strona główna</a>
                        <a href="" className="block text-gray-200 hover:text-purple-300 transition-colors font-medium" onClick={() => setIsToolbar(false)}>O nas</a>
                        <a href="" className="block text-gray-200 hover:text-purple-300 transition-colors font-medium" onClick={() => setIsToolbar(false)}>Usługi</a>
                        <a href="" className="block text-gray-200 hover:text-purple-300 transition-colors font-medium" onClick={() => setIsToolbar(false)}>Portfolio</a>
                        <a href="" className="block text-gray-200 hover:text-purple-300 transition-colors font-medium" onClick={() => setIsToolbar(false)}>Kontakt</a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Header;