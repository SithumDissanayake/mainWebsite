import React from "react";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import ProjectCard from "~/components/projectCard";

export default function ProjectsPage() {
    // Sample data for projects
    const projects = [
        {
            id: 1,
            image: "/assets/studentsChoice.png",
            title: "Students Choice",
            website: "https://studentschoice.blog/",
            description:
                "Students Choice is an online platform designed for university students to rate and review aspects of their university experience, including courses, accommodation, and career pathways. It also features a forum where students can post blogs and ask questions about university life. The platform aims to improve the quality of life for both current and future students. This semester, the focus is on building the forum and Q&A system, updating the website, refactoring the codebase, and optimizing scalability using React. Marketing efforts will include campus events, in-class promotions, and Google ads."
        },
        {
            id: 2,
            image: "/assets/flowcoding.png",
            title: "Flow Coding",
            website: "https://flowcoding.sithumd.com/",
            description:
                "Flow Coding is an platform designed to teach users the fundamentals of HTML and CSS, empowering them to build and style their own websites. Through step-by-step tutorials and activities, users can learn how to create responsive, visually appealing web pages from scratch."
        },
        // {
        //     id: 3,
        //     image:
        //         "https://via.placeholder.com/400x300.png?text=Project+3",
        //     title: "Project Three",
        //     description:
        //         "This is a brief description of Project Three. It focuses on scalability and robust functionalities."
        // }
    ];

    return (
        <main className="relative flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-[#80DED9] to-[#53599A] text-white py-8">
            <Navbar />
            <section className="w-full py-12 flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-8">My Projects</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            image={project.image}
                            title={project.title}
                            website={project.website}
                            description={project.description}
                        />
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
