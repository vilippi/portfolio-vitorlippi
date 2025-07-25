'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projetos = [
    {
        nome: "Meu Portfólio",
        descricao: "Portfólio pessoal com projetos em destaque, foco em frontend moderno e design responsivo.",
        imagem: "/portfolio/portfolio-1.png",
        link: "https://github.com/vilippi/portfolio-vitorlippi",
        demo: "https://portfolio.vercel.app",
    },
    {
        nome: "PC Manager",
        descricao: "Aplicativo desktop para controle de computadores com histórico.",
        imagem: "/gerenciador-pc/gerenciador-pc-1.png",
        link: "https://github.com/vilippi/gerenciador-computadores-v2",
        demo: "",
    },
    {
        nome: "Clone do Spotify",
        descricao: "Clone visual do Spotify com player funcional e navegação entre playlists, usando as APIs oficiais.",
        imagem: "/clone-spotify/spotify-1.png",
        link: "https://github.com/vilippi/clone-spotify",
        demo: "",
    },
    // {
    //     nome: "Clone do Instagram",
    //     descricao: "Clone visual e funcional do Instagram.",
    //     imagem: "",
    //     link: "",
    //     demo: "",
    // },
    // {
    //     nome: "CDO",
    //     descricao: "Site com informações e venda produtos para uma igreja.",
    //     imagem: "",
    //     link: "",
    //     demo: "",
    // },
];

export default function ProjetosSection() {
    return (
        <section id="projetos" className="w-full min-h-screen py-20 px-6 bg-gray-100 dark:bg-neutral-900">
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

                <Swiper
                    className="pb-10"
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {projetos.map((proj, idx) => (
                        <SwiperSlide key={idx}>
                            <motion.div
                                className="bg-white dark:bg-white/5 border dark:border-white/10 rounded-2xl shadow-md overflow-hidden backdrop-blur-md"
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="mt-8 text-center">
                <a
                    href="https://github.com/vilippi?tab=repositories" // ajuste para a rota real da sua página de projetos
                    className="inline-block px-6 py-2 rounded-xl text-sm font-medium bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition"
                >
                    Ver todos os projetos
                </a>
            </div>
        </section>
    );
}
