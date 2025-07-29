"use client"

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Skontaktuj się z nami</h2>
                    <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8" />
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Gotowy na współpracę? Masz pytania? Jesteśmy do Twojej dyspozycji!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 place-content-center -mt-4">
                    <Card className="bg-slate-700/50 border-yellow-400/30">
                        <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                                <div className="text-yellow-400">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-white mb-2">Telefon</h3>
                                    <p className="text-slate-300 font-medium">+48 662 292 424</p>
                                    <p className="text-slate-400 text-sm mt-1">Dostępny w godz. 8:00-20:00</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-700/50 border-yellow-400/30">
                        <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                                <div className="text-yellow-400">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-white mb-2">E-Mail</h3>
                                    <p className="text-slate-300 font-medium">biuro@elektrospeed.pl</p>
                                    <p className="text-slate-400 text-sm mt-1">Odpowiadamy w ciągu 2h</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;