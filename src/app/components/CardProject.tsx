import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubLink?: string;
  deployLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, githubLink, deployLink }) => {
  return (
    <div className="bg-gray-700 flex flex-col items-center justify-center w-full md:w-95% p-4 m-2 rounded-lg"
         style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', border: '1px solid #cbd5e0' }}>
      <div className="bg-black bg-opacity-50 p-4 m-2 rounded-lg text-left w-full">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex space-x-2">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-500">GitHub</a>
            )}
            {deployLink && (
              <a href={deployLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-500">Deploy</a>
            )}
          </div>
        </div>
        <p className="text-sm w-3/4 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
