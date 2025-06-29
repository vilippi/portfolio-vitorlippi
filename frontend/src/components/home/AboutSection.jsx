import minhaFoto from '../../assets/me.jpg';

export default function AboutSection() {
    return (
        <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-evenly px-8 py-20 gap-10 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

                {/* Foto */}
                <div className="w-64 h-64 shrink-0">
                    <img
                        src={minhaFoto}
                        alt="Minha foto"
                        className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white dark:border-gray-700"
                    />
                </div>

                {/* Texto */}
                <div className="border-l-4 border-black dark:border-gray-700 pl-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Sobre mim
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Sou um desenvolvedor fullstack focado em criar soluções eficientes e bem estruturadas. 
                        Tenho uma base sólida em lógica de programação, venho aplicando esses conhecimentos em projetos práticos que envolvem desde APIs até interfaces modernas.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        Trabalho com React, Tailwind CSS, Node.js, Electron e bancos de dados como MongoDB e PostgreSQL. 
                        Tenho experiência desenvolvendo dashboards, sistemas internos, CRUDs otimizados e integração com APIs REST, sempre priorizando performance, clareza no código e uma ótima experiência para o usuário.
                    </p>
                </div>
            </div>

        </section>
    );
}