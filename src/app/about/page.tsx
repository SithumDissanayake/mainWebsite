import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#80DED9] to-[#53599A] text-white">
            {/* Navigation */}
            <Navbar />

            {/* Main content wrapper */}
            <div className="flex-1 flex items-center justify-center w-full relative px-4">
                {/* About Content */}
                <div className="max-w-2xl w-full py-16">
                    <div className="text-center space-y-6">
                        <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
                        <p className="text-lg text-white/90">
                            Hi there! I&#39;m Sithum Dissanayake, a passionate full stack developer with a strong background in software engineering, honed during my Bachelor of Engineering (Honours) at the Australian National University. That experience not only equipped me with solid technical foundations but also immersed me in Agile Scrum methodologies, ensuring that I thrive in collaborative, fast-paced environments.
                        </p>
                        <p className="text-lg text-white/90">
                            With years of industry experience under my belt, I leverage practical, hands-on judgment to tackle complex problems from multiple perspectives—always seeking the most effective and innovative solution. My approach to software development involves breaking down systems into manageable sub-systems, allowing for independent testing, scaling, and seamless integration. This strategy aligns perfectly with microservices-based architectures and modern development practices.
                        </p>
                        <p className="text-lg text-white/90">
                            In every project, I maintain comprehensive documentation for code, processes, and platforms, ensuring transparency and ease of collaboration with technical partners and sub-contracts alike. I&#39;m committed to driving ideas from conception to market-ready products, consistently delivering quality outcomes as part of a driven, forward-thinking team.
                        </p>
                        {/* Social Icons */}
                        <div className="flex justify-center gap-6 pt-4">
                            <Link
                                href="https://github.com/SithumDissanayake"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
                                aria-label="GitHub Profile"
                            >
                                <Github className="h-6 w-6" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/sithum-dissanayake/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
                                aria-label="LinkedIn Profile"
                            >
                                <Linkedin className="h-6 w-6" />
                            </Link>
                            <Link
                                href="mailto:contact@sithumd.com"
                                className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
                                aria-label="Send Email"
                            >
                                <Mail className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                </div>

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

            {/* Footer */}
            <Footer />
        </main>
    );
}
