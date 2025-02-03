import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

export default function HomePage() {
    return (
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#80DED9] to-[#53599A] text-white">
            {/* Navbar */}
            <Navbar />

            {/* Main content that grows to push the footer down */}
            <div className="flex-1 flex items-center justify-center w-full relative px-4">
                {/* Hero Section */}
                <section className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 py-16">
                    <div className="flex-1 max-w-2xl text-center md:text-left">
                        <h2 className="mb-6 text-xl font-medium uppercase tracking-widest text-[#AEECEF]">
                            Software Engineer
                        </h2>
                        <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                            <span className="text-[#AEECEF]">Sithum</span> Dissanayake
                        </h1>
                        <p className="mb-12 text-lg text-white/90">
                            A 1% improvement everyday means a 365% improvement yearly
                        </p>
                        <div className="flex justify-center gap-6 md:justify-start">
                            <Link
                                href="https://github.com/SithumDissanayake"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
                            >
                                <Github className="h-6 w-6" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/sithum-dissanayake/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
                            >
                                <Linkedin className="h-6 w-6" />
                            </Link>
                            <Link
                                href="mailto:contact@sithumd.com"
                                aria-label="Send Email"
                                className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
                            >
                                <Mail className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
                            <div
                                className="absolute inset-0 rounded-full bg-[#AEECEF] blur-2xl opacity-20"
                                aria-hidden="true"
                            ></div>
                            <Image
                                src="/assets/me.jpg"
                                alt="Sithum Dissanayake"
                                width={400}
                                height={400}
                                className="relative z-10 rounded-full border-4 border-white/10 object-cover shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* Background Decoration */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div
                        className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] rounded-full bg-[#AEECEF]/10 blur-3xl"
                        aria-hidden="true"
                    ></div>
                    <div
                        className="absolute -bottom-1/2 -left-1/2 w-[600px] h-[600px] rounded-full bg-[#068D9D]/20 blur-3xl"
                        aria-hidden="true"
                    ></div>
                </div>
            </div>

            {/* Footer stays at the bottom */}
            <Footer />
        </main>
    );
}
