import React, { Component } from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import projectList from "../assets/data/projects";

const ProjectStyles = styled.div`
  padding-top: 10rem;
  min-height: 100vh;
  .error {
    padding: 10rem;
    text-align: center;
  }
  .filters {
    justify-content: center;
    margin-top: 3rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    .btn {
      background-color: var(--deep-dark);
      padding: 1rem 2rem;
      transition: 1s ease;
      cursor: pointer;
      p {
        text-transform: uppercase;
        font-size: 1.3rem;
      }
      &:hover {
        background-color: var(--gray-1);
        p {
          color: var(--deep-dark);
          font-weight: bold;
        }
      }
    }
  }
  .project__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 5rem 0;
  }
`;

export class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projList: projectList,
    };
  }

  BtnClick = (name) => {
    // console.log(name)
    if (name === "All") {
      this.setState({ projList: projectList });
    } else {
      let tempList = [];
      for (let i = 0; i < projectList.length; i++) {
        for (let j = 0; j < projectList[i].tech.length; j++) {
          if (name.toLowerCase() === projectList[i].tech[j]) {
            tempList.push(projectList[i]);
            break;
          }
        }
      }
      // console.log(tempList);
      this.setState({ projList: tempList });
    }
  };

  filter_names = [
    "All",
    "JavaScript",
    "CSS",
    "HTML",
    "Django",
    "React",
    "NodeJs",
    "AI ML",
    "Flutter",
    "Dart",
    "Python",
  ];

  render() {
    return (
      <ProjectStyles>
        <SectionTitle heading="PROJECTS" subheading="some of my works" />
        <div className="container">
          <div className="filters">
            {this.filter_names.map((name, index) => (
              <button
                onClick={() => this.BtnClick(name)}
                key={index}
                className="btn"
              >
                <p>{name}</p>
              </button>
            ))}
          </div>
          <div className="project__wrapper">
            {this.state.projList.map((project, index) => (
              <ProjectCard key={index} projects={project} />
            ))}
          </div>
        </div>
      </ProjectStyles>
    );
  }
}

export default Projects;
