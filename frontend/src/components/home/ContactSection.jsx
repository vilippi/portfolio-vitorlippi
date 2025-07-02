'use client'

import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function ContactSection() {
    return (
        <section id="contato" className="w-full min-h-screen px-6 py-20 bg-gray-100 dark:bg-neutral-900">
            <div className="max-w-3xl mx-auto">
                <motion.h2
                    className="text-3xl font-semibold text-center mb-4 dark:text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Entre em Contato
                </motion.h2>

                <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
                    Tem um projeto em mente ou quer bater um papo? Me envie uma mensagem!
                </p>

                {/* Formulário */}
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Seu nome"
                        className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Seu email"
                        className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        rows={5}
                        placeholder="Sua mensagem"
                        className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="bg-black text-white dark:bg-white dark:text-black font-medium py-3 px-6 rounded-xl hover:opacity-80 transition"
                    >
                        Enviar
                    </button>
                </form>

                {/* Links alternativos */}
                <div className="flex justify-center gap-6 mt-10 text-2xl">
                    <a
                        href="mailto:seuemail@example.com"
                        className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiMail />
                    </a>
                    <a
                        href="https://github.com/seuperfil"
                        className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/seuperfil"
                        className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiLinkedin />
                    </a>
                </div>
            </div>
        </section>
    )
}
