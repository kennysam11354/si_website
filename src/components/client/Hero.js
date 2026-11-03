"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero({ dict }) {
    const heroRef = useRef(null);
    const [isHeroVisible, setIsHeroVisible] = useState(true);
    const headlineParts = dict.headline.split("Contractor");
    const highlightsContractor = headlineParts.length === 2;
    const titleWords = highlightsContractor ? headlineParts[0].trim().split(/\s+/) : [];
    const titleLines = !highlightsContractor
        ? dict.headline.trim().split("\n").map((line) => line.trim().split(/\s+/))
        : [];

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => setIsHeroVisible(entry.isIntersecting),
            { threshold: 0.45 }
        );

        observer.observe(hero);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
            <Image
                src="/client/hero-mep-fitout.png"
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{ background: "linear-gradient(90deg, rgba(15, 23, 42, 0.82) 0%, rgba(15, 23, 42, 0.64) 42%, rgba(15, 23, 42, 0.25) 72%, rgba(15, 23, 42, 0.14) 100%)" }}
            ></div>

            {/* Background decoration */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-3xl">
                    <div className="inline-block px-4 py-2 mb-6 text-sm font-bold tracking-wider bg-secondary/10 border border-secondary/20 rounded-xl">
                        <span className="block text-secondary uppercase mb-1">{dict.ribbon.title}</span>
                        <span className="block text-gray-300 font-medium normal-case">{dict.ribbon.desc}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        {highlightsContractor ? (
                            <>
                                {titleWords.map((word, index) => (
                                    <span
                                        key={`${word}-${index}`}
                                        className={`hero-title-word${isHeroVisible ? " is-visible" : ""}`}
                                        style={{ animationDelay: `${index * 75}ms` }}
                                    >
                                        {word}&nbsp;
                                    </span>
                                ))}
                                <span
                                    className={`text-secondary tracking-tight hero-title-word${isHeroVisible ? " is-visible" : ""}`}
                                    style={{ animationDelay: `${titleWords.length * 75}ms` }}
                                >
                                    Contractor
                                </span>
                                {headlineParts[1]}
                            </>
                        ) : (
                            titleLines.map((line, lineIndex) => {
                                const priorWords = titleLines
                                    .slice(0, lineIndex)
                                    .reduce((count, previousLine) => count + previousLine.length, 0);

                                return (
                                    <span key={`title-line-${lineIndex}`}>
                                        {line.map((word, wordIndex) => (
                                            <span key={`${word}-${wordIndex}`}>
                                                <span
                                                    className={`hero-title-word${isHeroVisible ? " is-visible" : ""}`}
                                                    style={{ animationDelay: `${(priorWords + wordIndex) * 75}ms` }}
                                                >
                                                    {word}
                                                </span>
                                                {wordIndex < line.length - 1 ? " " : null}
                                            </span>
                                        ))}
                                        {lineIndex < titleLines.length - 1 && <br />}
                                    </span>
                                );
                            })
                        )}
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                        {dict.subtext}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-secondary hover:bg-amber-600 text-primary font-bold text-lg rounded-md transition-all transform hover:-translate-y-1 shadow-xl text-center"
                        >
                            {dict.ctaPrimary}
                        </a>
                        <a
                            href="#qualifications"
                            className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-bold text-lg rounded-md transition-all text-center"
                        >
                            {dict.ctaSecondary}
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center">
                <span className="text-gray-400 text-sm mb-2 uppercase tracking-widest">Scroll</span>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
}
