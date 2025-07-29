import { PlugZap } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-slate-950/90 py-12 border-t border-purple-500/20">
            <div className="container mx-auto px-4 text-center">
                <div className="flex items-center justify-center space-x-3 mb-6 text-2xl">
                    <span>
                        Elektro Speed 3
                    </span>
                </div>
                <p>
                    © {(new Date()).getFullYear()} Elektro Speed 3. Wszystkie prawa zastrzeżone.
                </p>
            </div>
        </footer>
    );
}

export default Footer;