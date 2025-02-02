import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

export default function AboutPage() {
    return (
        <main
            className="relative flex min-h-screen flex-col items-center
                 justify-center bg-gradient-to-b from-[#80DED9] to-[#53599A]
                 text-white py-8"
        >
            {/* Navigation */}
            <Navbar />

            {/* About Content */}
            <div className="mx-auto max-w-2xl px-4 text-center">
                <h1 className="mb-4 text-4xl font-bold">About Me</h1>
                <p className="mb-6 text-lg">
                    Hi there! I&#39;m Sithum Dissanayake, a passionate developer with a love for building
                    innovations and engaging digital experiences!
                </p>
                <p className="mb-8 text-lg">
                    I&#39;m always on the lookout for new opportunities and collaborations.
                    Feel free to reach out via any of the platforms below or get in touch
                    directly!
                </p>

                {/* Social Icons */}
                <div className="flex justify-center space-x-6">
                    <Link
                        href="https://github.com/SithumDissanayake"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github className="h-8 w-8 hover:text-gray-300" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/sithum-dissanayake/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin className="h-8 w-8 hover:text-gray-300" />
                    </Link>
                    <Link href="mailto:contact@sithumd.com">
                        <Mail className="h-8 w-8 hover:text-gray-300" />
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
