import { AlarmSmoke, Factory, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";

const ServicesSection = () => {
    const services = [{
        icon: <Zap className="h-12 w-12" />,
        title: "Instalacje elektryczne",
        description: "Montaż instalacji elektrycznych w budynkach użytku publicznego.",
        features: [
            "Przyłącza zasilającze", 
            "Podłączanie rozdzielni elektrycznych", 
            "Pomiary elektryczne",
            "Budowa tras kablowych",
            "Układanie i przeciąganie kabli",
            "Biały montaż"
        ]
    }, {
        icon: <Factory className="h-12 w-12" />,
        title: "Instalacje przemysłowe",
        description: "Budowa fabryk chemicznych, linii produkcyjnych.",
        features: [
            "Podłączenia transformatora", 
            "Przyłącza zasilające", 
            "Podłączanie rozdzielni sterujących",
            "Podłączanie urządzeń elektrycznych",
            "Budowa tras kablowych",
            "Układanie i przeciąganie kabli",
        ]
    }, {
        icon: <AlarmSmoke className="h-12 w-12" />,
        title: "Instalacje teletechniczne",
        description: "Montaż instalacji teletechnicznych.",
        features: [
            "Systemy przeciwpożarowe",
            "Monitoring",
            "Alarmy",
        ]
    }];

    return (
        <section id="services" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Nasze usługi
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8 rounded-full" />
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Oferujemy pełen zakres usług elektrycznych - od prostych instalacji elektrycznych po kompleksowe instalacje przemysłowe
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <Card key={index} className="bg-slate-800/30 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
                            <CardHeader>
                                <div className="text-purple-400 mb-4">{service.icon}</div>
                                <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                                <CardDescription className="text-gray-300 text-lg">{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {service.features.map((feature, ix) => (
                                        <li key={ix} className="flex items-center text-gray-300">
                                            <Zap className="h-4 w-4 text-purple-400 mr-3 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;