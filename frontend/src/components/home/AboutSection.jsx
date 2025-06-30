import minhaFoto from '../../assets/me.jpg';
import wallpaper from '../../assets/wallpaper.jpg';

export default function AboutSection() {
    return (
        <section 
            className="w-full min-h-screen flex flex-col md:flex-row items-center justify-evenly px-8 py-20 gap-10 bg-cover bg-center bg-no-repeat dark:bg-black transition-colors duration-300"
            style={{ backgroundImage: `url(${wallpaper})` }}
        >

            <div className="p-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20"
                style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                }}
            >
                {/* Foto */}
                <div className="w-64 h-64 shrink-0">
                    <img
                        src={minhaFoto}
                        alt="Minha foto"
                        className="w-full h-full object-cover rounded-full shadow-lg"
                    />
                </div>

                {/* Texto */}
                <div className="border-l-4 border-white pl-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Sobre mim
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                        Sou um desenvolvedor fullstack focado em criar soluções eficientes e bem estruturadas. 
                        Tenho uma base sólida em lógica de programação, venho aplicando esses conhecimentos em projetos práticos que envolvem desde APIs até interfaces modernas.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Trabalho com React, Tailwind CSS, Node.js, Electron e bancos de dados como MongoDB e PostgreSQL. 
                        Tenho experiência desenvolvendo dashboards, sistemas internos, CRUDs otimizados e integração com APIs REST, sempre priorizando performance, clareza no código e uma ótima experiência para o usuário.
                    </p>
                </div>
            </div>
        </section>
    );
}