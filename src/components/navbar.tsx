import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 z-50 w-full py-6">
            <div className="container mx-auto flex items-center justify-between px-4">
                <Link
                    href="/"
                    className="text-2xl font-bold text-[#068D9D] hover:text-[#AEECEF] transition-colors"
                    aria-label="Homepage"
                >
                    SD
                </Link>
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <Link
                        href="/about"
                        className="text-[#068D9D] hover:text-[#AEECEF] transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="/projects"
                        className="text-[#068D9D] hover:text-[#AEECEF] transition-colors"
                    >
                        Projects
                    </Link>
                    <Link
                        href="mailto:contact@sithumd.com"
                        className="text-[#068D9D] hover:text-[#AEECEF] transition-colors"
                    >
                        Contact
                    </Link>
                </div>
                {/* Mobile Menu using details/summary */}
                <details className="group relative md:hidden">
                    <summary
                        className="list-none cursor-pointer text-[#068D9D] transition-colors hover:text-[#AEECEF]"
                        aria-label="Toggle menu"
                    >
                        <Menu className="w-6 h-6" />
                    </summary>
                    <div className="absolute right-0 mt-2 w-40 rounded-md bg-[#6D9DC5] py-2 shadow-lg ring-1 ring-black ring-opacity-5 group-open:block hidden">
                        <Link
                            href="/about"
                            className="block px-4 py-2 text-sm text-[#80DED9] hover:bg-[#068D9D]/10 hover:text-[#AEECEF] transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="/projects"
                            className="block px-4 py-2 text-sm text-[#80DED9] hover:bg-[#068D9D]/10 hover:text-[#AEECEF] transition-colors"
                        >
                            Projects
                        </Link>
                        <Link
                            href="mailto:contact@sithumd.com"
                            className="block px-4 py-2 text-sm text-[#80DED9] hover:bg-[#068D9D]/10 hover:text-[#AEECEF] transition-colors"
                        >
                            Contact
                        </Link>
                    </div>
                </details>
            </div>
        </nav>
    );
}