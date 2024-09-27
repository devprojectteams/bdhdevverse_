import Image from "next/image";
import { Typography } from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  url: string; // Add a URL prop for each project
  projectUrl: string; // Add hosted project URL for 'see details'
}

export function ProjectCard({ img, title, desc, url, projectUrl }: ProjectCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md">
      <div className="h-48 overflow-hidden rounded-t-lg">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Image
            src={img}
            alt={title}
            width={768}
            height={768}
            className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </a>
      </div>
      <div className="p-6">
        <a
          href={url}
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500">{desc}</Typography>
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 bg-black text-white rounded-md text-sm font-semibold shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 hover:shadow-lg"
        >
          See Details
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

