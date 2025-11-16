import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css";

import moremusicImg from "./assets/moremusic.png";
import mlMinesweeperImg from "./assets/ML-minesweeper.png";

function App() {
  return (
    <div className="App bg-dark text-light min-vh-100 d-flex flex-column align-items-center py-5">
      <h1 className="mb-5 text-center">My Projects</h1>

      <div className="container-fluid px-0">
        <div className="row g-4 justify-content-center w-100">
          {/* MoreMusic Project */}
          <div className="col-12 col-md-6 col-lg-5 d-flex">
            <div className="card bg-secondary text-light flex-fill">
              <img
                src={moremusicImg}
                className="card-img-top img-fluid"
                alt="MoreMusic"
                style={{ maxHeight: "200px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">MoreMusic</h5>
                <p className="card-text">
                  Spotify-integrated tool recommending emerging genres and tracks via dynamic category generation and real-time API queries.
                </p>
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
          <div className="col-12 col-md-6 col-lg-5 d-flex">
            <div className="card bg-secondary text-light flex-fill">
              <img
                src={mlMinesweeperImg}
                className="card-img-top img-fluid"
                alt="ML Minesweeper"
                style={{ maxHeight: "200px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">ML Minesweeper</h5>
                <p className="card-text">
                  Neural-network powered Minesweeper solver using probability mapping and pattern learning.
                </p>
                <a href="#" className="btn btn-primary mt-2 disabled">
                  Coming Soon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;