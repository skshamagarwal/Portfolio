import React from "react";
import styled from "styled-components";

const ProjectCardStyles = styled.div`
  .grid-item {
    background-color: #fff;
    border-radius: 0.4rem;
    overflow: hidden;
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: 0.2s;
  }

  .grid-item:hover {
    transform: translateY(-0.5%);
    box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.5);
  }

  .card-img {
    display: block;
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }

  .card-content {
    padding: 3rem;
  }

  .card-header {
    font-size: 3rem;
    font-weight: 500;
    color: #0d0d0d;
    margin-bottom: 1.5rem;
  }

  .card-text {
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
    line-height: 1.7;
    color: #3d3d3d;
    margin-bottom: 2.5rem;
  }

  .card-btn {
    display: block;
    width: 100%;
    padding: 1.5rem;
    font-size: 2rem;
    text-align: center;
    color: #3363ff;
    background-color: #d8e0fd;
    border: none;
    border-radius: 0.4rem;
    transition: 0.2s;
    cursor: pointer;
    letter-spacing: 0.1rem;
  }

  .card-btn span {
    margin-left: 1rem;
    transition: 0.2s;
  }

  .card-btn:hover,
  .card-btn:active {
    background-color: #c2cffc;
  }

  .card-btn:hover span,
  .card-btn:active span {
    margin-left: 1.5rem;
  }
`;

export default function ProjectCard({ projects }) {
  return (
    <ProjectCardStyles>
      <div className="grid-item">
        <div className="card">
          <img
            className="card-img"
            src={projects.img}
            alt={projects.firstName}
          />
          <div className="card-content">
            <h1 className="card-header">
              {projects.firstName}
              {projects.lastName}
            </h1>
            <p className="card-text">{projects.desc}</p>
            <a
              href={projects.githubLink}
              target="_blank"
              rel="noreferrar noreferrer"
            >
              <button className="card-btn">
                Visit <span>&rarr;</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </ProjectCardStyles>
  );
}
