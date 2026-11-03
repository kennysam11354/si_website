import { dictionaries } from "@/lib/client/dictionary";
import Navbar from "@/components/client/Navbar";
import Hero from "@/components/client/Hero";
import Services from "@/components/client/Services";
import Projects from "@/components/client/Projects";
import LocalLawSection from "@/components/client/LocalLawSection";
import Industries from "@/components/client/Industries";
import About from "@/components/client/About";
import ContactForm from "@/components/client/ContactForm";
import Footer from "@/components/client/Footer";

export const metadata = {
    title: "CORE ELECTRIC MEP INDUSTRIES | 전기 공사 전문",
    description: "뉴욕 전역의 상업용, 주거용 및 공공 부문 프로젝트를 수행하는 전기 시공업체.",
    alternates: {
        canonical: "/client/ko",
        languages: {
            en: "/client",
            ko: "/client/ko",
        },
    },
    icons: {
        icon: "/client/favicon.png",
    },
};

export default function Home() {
    const dict = dictionaries.ko;

    return (
        <main className="client-korean min-h-screen" lang="ko">
            <Navbar dict={dict.navbar} lang="ko" />
            <Hero dict={dict.hero} />
            <Services dict={dict.services} />
            <Projects dict={dict.projects} />
            <LocalLawSection dict={dict.localLaw} />
            <Industries dict={dict.industries} />
            <About dict={dict.about} />
            <ContactForm dict={dict.contact} />
            <Footer dict={dict.footer} lang="ko" />
        </main>
    );
}
