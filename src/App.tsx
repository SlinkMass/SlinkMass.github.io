import { useState, useEffect } from "react";
import "./App.css";

interface ProjectType {
  id: string;           // unique id
  name: string;
  description: string;
  link: string;
  isGitHub?: boolean;   // optional flag
}

const staticProjects: ProjectType[] = [
  {
    id: "moremusic",
    name: "MoreMusic",
    description: "Discover random music genres and songs, powered by Spotify API.",
    link: "https://moremusic.theolouis.shop",
  },
  {
    id: "portfolio",
    name: "This Portfolio",
    description: "My personal website showing projects and experience.",
    link: "https://theolouis.shop",
  },
];

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
}

function App() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch GitHub repos
    fetch("https://api.github.com/users/SlinkMass/repos")
      .then((res) => res.json())
      .then((data) => {
        let githubProjects: ProjectType[] = [];
        if (Array.isArray(data)) {
          githubProjects = data.map((repo: Repo) => ({
            id: String(repo.id),
            name: repo.name,
            description: repo.description || "No description provided.",
            link: repo.html_url,
            isGitHub: true,
          }));
        } else {
          console.error("Unexpected data from GitHub API:", data);
        }
        setProjects([...staticProjects, ...githubProjects]);
      })
      .catch((err) => {
        console.error("Failed to fetch GitHub repos:", err);
        setProjects(staticProjects); // fallback to static projects only
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading projects...</p>;

  return (
    <>
      <h1>My Projects!</h1>
      <div className="container">
        {projects.map((project) => (
          <div className="row" key={project.id}>
            <div className="col">
              <div className="project-card">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target={project.isGitHub ? "_blank" : "_self"}
                  rel={project.isGitHub ? "noopener noreferrer" : undefined}
                >
                  {project.isGitHub ? "View on GitHub" : "Visit"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;