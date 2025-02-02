// src/components/ProjectCard.tsx
"use client";

import React from "react";
import Image from "next/image";

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    website: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, website, }) => {
    return (
        <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="group block max-w-sm bg-white text-black rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
        >
            <Image src={image} alt={title} width={800} height={450} className="w-full h-48 object-cover" />
            <div className="p-4 h-40 relative flex flex-col">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <div className="relative h-20 overflow-hidden">
                    <p className="description text-base transition-transform duration-[5000ms] transform">
                        {description}
                    </p>
                </div>
            </div>
            <style jsx>{`
        /* On hover, translate the paragraph up. When hover stops, it
           will transition back to translateY(0), thanks to the defined transition */
        :global(.group:hover) .description {
          transform: translateY(-75%);
        }
      `}</style>
        </a>
    );
};

export default ProjectCard;
