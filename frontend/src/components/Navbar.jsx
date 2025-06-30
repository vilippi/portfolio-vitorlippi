// components/Navbar.jsx
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Navbar() {

    // Função Dark Mode
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem("darkMode");
        if (saved !== null) return saved === "true";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("darkMode", "true");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("darkMode", "false");
        }
    }, [isDarkMode]);

    return (
        <header
            className="fixed top-0 left-0 w-full z-50"
            style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(2px)',
                WebkitBackdropFilter: 'blur(2px)',
            }}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Vitor Lippi
                </h1>

                <ul className="flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
                    <li><a href="#apresentacao" className="hover:opacity-70">Apresentação</a></li>
                    <li><a href="#projetos" className="hover:opacity-70">Projetos</a></li>
                    <li><a href="#contato" className="hover:opacity-70">Contato</a></li>

                    <li>
                        <button 
                            onClick={() => setIsDarkMode(!isDarkMode)} 
                            className="p-2 rounded hover:bg-black/10 dark:hover:bg-white/10"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
