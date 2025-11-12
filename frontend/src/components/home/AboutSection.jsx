import minhaFoto from '../../assets/me.jpg';
import wallpaper from '../../assets/wallpaper.jpg';

export default function AboutSection() {
    return (
        <section
            id="sobremim"
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
                        Sou desenvolvedor fullstack e gosto de construir aplicações modernas de ponta a ponta. Trabalho principalmente com React/Next.js e Tailwind CSS no frontend, e também desenvolvo APIs e serviços no backend com foco em Python. 
                        Já atuei em projetos que vão desde painéis internos e dashboards até apps desktop com Electron. Na SoftPark, desenvolvi módulos internos fullstack, desde o frontend em Next.js até as APIs em Python/Docker. 
                        <br />
                        Sempre buscando código claro, componentização e boa experiência do usuário.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Tenho foco em UX, priorizo interfaces limpas, responsivas e com feedbacks claros. 
                        Sou adaptável e me integro rápido ao stack e aos processos do time. 
                        Mantenho estudo contínuo em arquitetura, performance e boas práticas para entregar código cada vez mais simples, legível e fácil de manter.
                    </p>
                </div>
            </div>
        </section>
    );
}