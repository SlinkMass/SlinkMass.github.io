import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
}

function App() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch("https://api.github.com/users/SlinkMass/repos")
    .then((res) => res.json())
    .then((data) => {
      if (Array.isArray(data)) {
        setRepos(data);
      } else {
        console.error("Unexpected data from GitHub API:", data);
        setRepos([]);
      }
      setLoading(false);
    })
    .catch((err) => {
      console.error("Failed to fetch repos:", err);
      setLoading(false);
    });
}, []);

  if (loading) return <p>Loading projects...</p>;

  return (
    <>
      <h1>My Projects!</h1>
      <div className="container">
        {repos.map((repo) => (
          <div className="row" key={repo.id}>
            <div className="col">
              <Project repo={repo} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

interface ProjectProps {
  repo: Repo;
}

function Project({ repo }: ProjectProps) {
  return (
    <div className="project-card">
      <h2>{repo.name}</h2>
      <p>{repo.description || "No description provided."}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
}

export default App;

