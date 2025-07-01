'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const greetings = {
    pt: 'olá!',
    en: 'hello!',
    es: '¡hola!',
    jp: 'こんにちは！',
    fr: 'salut !',
    it: 'Ciao !',
};

const languages = Object.keys(greetings);

export default function ConsoleLog() {
    const [currentLangIndex, setCurrentLangIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    const typingSpeed = 80;
    const pauseDuration = 2000;

    useEffect(() => {
        const fullText = ` console.log("${greetings[languages[currentLangIndex]]}")`;
        let charIndex = 0;
        let timeoutId;

        setDisplayText('');
        setIsTyping(true);

        const typeChar = () => {
            if (charIndex < fullText.length) {
                setDisplayText((prev) => prev + fullText.charAt(charIndex));
                charIndex++;
                timeoutId = setTimeout(typeChar, typingSpeed);
            } else {
                setIsTyping(false);
                timeoutId = setTimeout(() => {
                    setCurrentLangIndex((prev) => (prev + 1) % languages.length);
                }, pauseDuration);
            }
        };

        typeChar();
        return () => clearTimeout(timeoutId);
    }, [currentLangIndex]);

    return (
        <h4 className="text-lg text-gray-500 dark:text-gray-400 mb-2 font-mono whitespace-nowrap items-center">
            {displayText}
            <motion.span
                className="inline-block w-[1ch] ml-1"
                animate={{ opacity: [0, 1] }}
                transition={{
                    repeat: Infinity,
                    duration: 0.6,
                    ease: 'easeInOut',
                }}
            >
                |
            </motion.span>
        </h4>
    );
}
