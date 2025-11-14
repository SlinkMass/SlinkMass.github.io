import React from "react";
import "./App.css";

import moremusicImg from "./assets/moremusic.png";
import mlMinesweeperImg from "./assets/ML-minesweeper.png";

function App() {
  return (
    <div className="App bg-dark text-light min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="mb-5">My Projects</h1>

      <div className="row g-4 w-75">
        {/* MoreMusic Project */}
        <div className="col-md-6">
          <div className="card bg-secondary text-light h-100">
            <img
              src={moremusicImg}
              className="card-img-top img-fluid"
              alt="MoreMusic"
              style={{ maxHeight: "200px", objectFit: "contain" }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">MoreMusic</h5>
              <p className="card-text">A music discovery app hosted on Railway.</p>
              <a
                href="https://moremusic.theolouis.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-2"
              >
                Visit Project
              </a>
            </div>
          </div>
        </div>

        {/* ML Minesweeper Project */}
        <div className="col-md-6">
          <div className="card bg-secondary text-light h-100">
            <img
              src={mlMinesweeperImg}
              className="card-img-top img-fluid"
              alt="ML Minesweeper"
              style={{ maxHeight: "200px", objectFit: "contain" }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">ML Minesweeper</h5>
              <p className="card-text">A machine learning powered Minesweeper project.</p>
              <a
                href="#"
                className="btn btn-primary mt-2 disabled"
              >
                Coming Soon
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
