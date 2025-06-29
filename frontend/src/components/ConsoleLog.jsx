import { useState, useEffect } from 'react';

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
        const fullText = `cconsole.log("${greetings[languages[currentLangIndex]]}")`;
        let charIndex = 0;

        setDisplayText('');
        setIsTyping(true);

        const typeChar = () => {
            if (charIndex < fullText.length) {
                setDisplayText(prev => prev + fullText.charAt(charIndex));
                charIndex++;
                setTimeout(typeChar, typingSpeed);
            } else {
                setIsTyping(false);
                setTimeout(() => {
                    setCurrentLangIndex((prev) => (prev + 1) % languages.length);
                }, pauseDuration);
            }
        };

        typeChar();
    }, [currentLangIndex]);

    return (
        <h4 className="text-lg text-gray-500 dark:text-gray-400 mb-2 font-mono whitespace-nowrap">
            {displayText}
            <span className={`inline-block w-[1ch] ${isTyping ? 'animate-pulse' : ''}`}>|</span>
        </h4>
    );
}
