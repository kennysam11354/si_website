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
  title: "CORE ELECTRIC MEP INDUSTRIES | Electrical Contractor",
  description:
    "Electrical contractor serving commercial, residential, and public sector projects across New York.",
  alternates: {
    canonical: "/client",
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
  const dict = dictionaries.en;

  return (
    <main className="min-h-screen">
      <Navbar dict={dict.navbar} lang="en" />
      <Hero dict={dict.hero} />
      <Services dict={dict.services} />
      <Projects dict={dict.projects} />
      <LocalLawSection dict={dict.localLaw} />
      <Industries dict={dict.industries} />
      <About dict={dict.about} />
      <ContactForm dict={dict.contact} />
      <Footer dict={dict.footer} lang="en" />
    </main>
  );
}
