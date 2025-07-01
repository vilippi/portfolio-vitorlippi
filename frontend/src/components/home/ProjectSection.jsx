'use client';

import { motion } from 'framer-motion';

const projetos = [
    {
        nome: "Sistema de Contratos",
        descricao: "Gestão de contratos com dashboard, filtros dinâmicos e gráficos interativos.",
        imagem: "/projetos/contratos.png",
        link: "https://github.com/seuuser/sistema-contratos",
        demo: "https://sistema-contratos.vercel.app",
    },
    {
        nome: "PC Manager",
        descricao: "Aplicativo desktop para controle de computadores com histórico de status.",
        imagem: "/projetos/pcmanager.png",
        link: "https://github.com/seuuser/pc-manager",
        demo: "",
    },
    {
        nome: "Dashboard Clientes",
        descricao: "Dashboard interativo com dados filtráveis por estado e serviço contratado.",
        imagem: "/projetos/dashboard.png",
        link: "https://github.com/seuuser/dashboard-clientes",
        demo: "",
    },
];

export default function ProjectSection() {
    return (
        <section id="projetos" className="w-full min-h-screen py-20 px-6  bg-gray-100 dark:bg-neutral-900">
            <div className="max-w-6xl mx-auto">
                <motion.h2 
                    className="text-3xl font-semibold text-center mb-4 dark:text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Meus Projetos
                </motion.h2>

                <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
                    Alguns dos projetos que desenvolvi com foco em experiência do usuário e funcionalidade.
                </p>

                <div className="overflow-x-auto">
                    <div className="flex gap-6 pb-4 w-max">
                        {projetos.map((proj, idx) => (
                            <motion.div 
                                key={idx}
                                className="min-w-[300px] max-w-sm bg-white dark:bg-white/5 border dark:border-white/10 rounded-2xl shadow-md overflow-hidden backdrop-blur-md"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.2 }}
                            >
                                <img src={proj.imagem} alt={proj.nome} className="w-full h-48 object-cover" />
                                <div className="p-4 space-y-2">
                                    <h3 className="text-lg font-semibold dark:text-white">{proj.nome}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{proj.descricao}</p>
                                    <div className="flex gap-3 mt-4">
                                        {proj.demo && (
                                            <a href={proj.demo} target="_blank" rel="noopener noreferrer"
                                                className="px-3 py-1 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm hover:opacity-80 transition"
                                            >
                                                Ver Projeto
                                            </a>
                                        )}
                                        <a href={proj.link} target="_blank" rel="noopener noreferrer"
                                            className="px-3 py-1 rounded-lg border dark:border-white/50 text-sm text-black dark:text-white hover:opacity-80 transition"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
