'use client';

import { motion } from 'framer-motion';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiPhp } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaPhoenixFramework } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { SiDbeaver } from "react-icons/si";
import { SiSwagger } from "react-icons/si";



const frontend = [
  { nome: 'HTML', icone: FaHtml5 },
  { nome: 'CSS', icone: FaCss3Alt },
  { nome: 'JavaScript', icone: IoLogoJavascript },
  { nome: 'TypeScript', icone: SiTypescript },
  { nome: 'React.js', icone: FaReact },
  { nome: 'Next.js', icone: RiNextjsFill },
  { nome: 'Vite', icone: SiVite },
  { nome: 'Bootstrap', icone: FaBootstrap },
  { nome: 'Tailwind', icone: RiTailwindCssFill },
  { nome: 'Material UI', icone: SiMui },
  { nome: 'Motion', icone: SiFramer },
  { nome: 'Figma', icone: FaFigma },
  { nome: 'behance', icone: FaBehance },
];

const backend = [
  { nome: 'Node.js', icone: FaNodeJs },
  { nome: 'Python', icone: FaPython },
  { nome: 'FastApi', icone: SiFastapi },
  { nome: 'MongoDB', icone: SiMongodb },
  { nome: 'Firebase', icone: IoLogoFirebase },
  { nome: 'MySQL', icone: GrMysql },
  { nome: 'PHP', icone: SiPhp },
  { nome: 'Postman', icone: SiPostman },
  { nome: 'Docker', icone: FaDocker },
  { nome: 'FireBird', icone: FaPhoenixFramework },
  { nome: 'DBeaver', icone: SiDbeaver },
  { nome: 'Swagger', icone: SiSwagger },
];

export default function SkillSection() {
  return (
    <section id="habilidades" className="w-full min-h-screen py-20 px-6 bg-gray-100 dark:bg-neutral-900 text-black dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Linguagens e Tecnologias</h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* FRONT-END */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Front-End</h3>
            <div className="grid grid-cols-3 gap-4">
              {frontend.map((tech) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  key={tech.nome}
                  className="dark:bg-neutral-800 p-4 rounded-xl flex flex-col items-center justify-center shadow-md"
                >
                  {typeof tech.icone === 'string' ? (
                    <img src={tech.icone} alt={tech.nome} width={40} height={40} />
                  ) : (
                    <tech.icone size={40} />
                  )}
                  <p className="mt-2 text-sm text-center">{tech.nome}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* BACK-END */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Back-End</h3>
            <div className="grid grid-cols-3 gap-4">
              {backend.map((tech) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  key={tech.nome}
                  className="dark:bg-neutral-800 p-4 rounded-xl flex flex-col items-center justify-center shadow-md"
                >
                  {typeof tech.icone === 'string' ? (
                    <img src={tech.icone} alt={tech.nome} width={40} height={40} />
                  ) : (
                    <tech.icone size={40} />
                  )}
                  <p className="mt-2 text-sm text-center">{tech.nome}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
