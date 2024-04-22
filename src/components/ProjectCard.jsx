import React from "react";

const ProjectCard = ({ img, title, description, technologies }) => {
  return (
    <div className="relative w-24 rounded-xl bg-transparent shadow-lg ring-1 ring-black/5 backdrop-blur-xl">
      <img src={img} alt="Imagen" />
      <div>
        <div>
          {" "}
          <h2>{title}</h2> <div>Arrow</div>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <ul className="list-disc ml-4">
          {technologies.map((tech, index) => (
            <li key={index}>{tech} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
