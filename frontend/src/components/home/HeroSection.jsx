import ConsoleLog from "../ConsoleLog";
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { FileDown } from 'lucide-react';

import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-evenly px-8 py-20 gap-10 bg-gray-100 dark:bg-neutral-900 transition-colors duration-300">

            {/* Conteúdo à esquerda */}
            <div className="max-w-xl text-center">
                <ConsoleLog />
                <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                    Vitor Lippi<br />
                    <span className="block">Desenvolvedor FullStack</span>
                </h1>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Sou apaixonado por desenvolvimento e estou construindo minha trajetória como desenvolvedor full-stack, unindo teoria e prática em projetos reais enquanto evoluo academicamente e profissionalmente.
                </p>
                <div className="flex gap-4 mt-6 justify-center">
                    {/* GitHub */}
                    <a
                        href="https://github.com/vilippi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-white/10 backdrop-blur-md text-black dark:text-white font-medium shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:brightness-105"
                    >
                        <motion.div whileHover={{ y: -2, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Github className="w-4 h-4" />
                        </motion.div>
                        GitHub
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/vitor-lippi-953240272/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-white/10 backdrop-blur-md text-black dark:text-white font-medium shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:brightness-105"
                    >
                        <motion.div whileHover={{ y: -2, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Linkedin className="w-4 h-4" />
                        </motion.div>
                        Linkedin
                    </a>

                    {/* Currículo */}
                    <a
                        href="/curriculo.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-white/10 backdrop-blur-md text-black dark:text-white font-medium shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:brightness-105"
                    >
                        <motion.div whileHover={{ y: -2, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                            <FileDown className="w-4 h-4" />
                        </motion.div>
                        Curriculo
                    </a>
                </div>
            </div>

            {/* Imagem à direita */}
            <div className="w-64 h-64">
                <img
                    src="/bunny-dev.png" // substitua pelo caminho correto
                    alt="Bunny Developer"
                    className="w-full h-full object-contain rounded-full shadow-lg"
                />
            </div>

        </section>
    );
}
