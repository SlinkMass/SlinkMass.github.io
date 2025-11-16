import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css";

import moremusicImg from "./assets/moremusic.png";
import mlMinesweeperImg from "./assets/ML-minesweeper.png";
import riskImg from "./assets/Risk.png";

interface Project {
  title: string;
  description: string;
  imgSrc: string;
  link: string;
  disabled?: boolean;
}

const projects: Project[] = [
  {
    title: "MoreMusic",
    description: "Spotify-integrated tool recommending emerging genres and tracks via dynamic category generation and real-time API queries.",
    imgSrc: moremusicImg,
    link: "https://moremusic.theolouis.shop",
  },
  {
    title: "ML Minesweeper",
    description: "Neural-network powered Minesweeper solver using probability mapping and pattern learning.",
    imgSrc: mlMinesweeperImg,
    link: "https://github.com/SlinkMass/AI-minesweeper",
  },
  {
    title: "Risk-Battleground",
    description: "Collaborative godot project featuring a twist on risk, with online capabilities and seamless transitions",
    imgSrc: riskImg,
    link: "https://github.com/Zene8/GodotGame",
  },
  {
    title: "Project 4",
    description: "Short description for project 4.",
    imgSrc: "",
    link: "#",
    disabled: true,
  }
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="col-12 col-md-6 col-lg-5 d-flex mb-4">
      <div className="card bg-secondary text-light flex-fill">
        <img
          src={project.imgSrc}
          className="card-img-top img-fluid"
          alt={project.title}
          style={{ maxHeight: "200px", objectFit: "contain" }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>
          <a
            href={project.link}
            className={`btn btn-primary mt-2 ${project.disabled ? 'disabled' : ''}`}
            target={project.disabled ? "_self" : "_blank"}
            rel={project.disabled ? undefined : "noopener noreferrer"}
          >
            {project.disabled ? "Coming Soon" : "Visit Project"}
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App bg-dark text-light min-vh-100 d-flex flex-column align-items-center py-5">
      <h1 className="mb-5 text-center">My Projects</h1>

      <div className="container-fluid px-0">
        <div className="row g-4 justify-content-center w-100">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;