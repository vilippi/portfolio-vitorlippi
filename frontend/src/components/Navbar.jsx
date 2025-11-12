// components/Navbar.jsx
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
    // dark mode
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem("darkMode");
        if (saved !== null) return saved === "true";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    // menu mobile
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("darkMode", "true");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("darkMode", "false");
        }
    }, [isDarkMode]);

    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false); // fecha o menu no mobile depois do clique
        }
    };

    return (
        <header
            className="fixed top-0 left-0 w-full z-50"
            style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
            }}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Vitor Lippi
                </h1>

                {/* DESKTOP */}
                <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
                    <li>
                        <button onClick={() => handleScroll("apresentacao")} className="cursor-pointer hover:opacity-70">
                            Apresentação
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleScroll("sobremim")} className="cursor-pointer hover:opacity-70">
                            Sobre mim
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleScroll("habilidades")} className="cursor-pointer hover:opacity-70">
                            Habilidades
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleScroll("projetos")} className="cursor-pointer hover:opacity-70">
                            Projetos
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleScroll("contato")} className="cursor-pointer hover:opacity-70">
                            Contato
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="p-2 rounded hover:bg-black/10 dark:hover:bg-white/10"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </li>
                </ul>

                {/* MOBILE: botão hamburguer */}
                <div className="md:hidden flex items-center gap-2">
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="p-2 rounded hover:bg-black/10 dark:hover:bg-white/10 text-gray-700 dark:text-gray-200"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded hover:bg-black/10 dark:hover:bg-white/10 text-gray-700 dark:text-gray-200"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* MENU MOBILE DROPDOWN */}
            {isOpen && (
                <div className="md:hidden bg-white/80 dark:bg-neutral-900/90 backdrop-blur text-gray-800 dark:text-gray-100">
                    <ul className="flex flex-col gap-2 px-6 pb-4 text-sm font-medium">
                        <li>
                            <button onClick={() => handleScroll("apresentacao")} className="block w-full text-left py-2">
                                Apresentação
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleScroll("sobremim")} className="block w-full text-left py-2">
                                Sobre mim
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleScroll("habilidades")} className="block w-full text-left py-2">
                                Habilidades
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleScroll("projetos")} className="block w-full text-left py-2">
                                Projetos
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleScroll("contato")} className="block w-full text-left py-2">
                                Contato
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
