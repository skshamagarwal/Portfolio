import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import ServicesSectionItem from "../components/ServicesSectionItem";
import { MdDesktopMac } from "react-icons/md";
import { BsArrowDown } from "react-icons/bs";
import DownloadCV from "../components/DownloadCV";
import TestimonialsSection from "../components/TestimonialsSection";

const HomeStyles = styled.div`
  .hero {
    min-height: 500px;
    height: 100vh;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .hero__heading {
    font-size: 2rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 7rem;
      font-family: "Montserrat SemiBold";
      color: var(--white);
      text-shadow: 2px 2px #00000094;
    }
  }

  .hero__info {
    margin-top: 5rem;
    p {
      text-shadow: 1.5px 1.5px #00000094;
      margin-bottom: 5rem;
    }
    .buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      a {
        margin: 1rem;
      }
    }
  }

  .scroll__icon {
    text-align: center;
    margin-top: -8rem;
    svg {
      width: 5rem;
    }
  }

  .services__section {
    padding: 10rem 0;
    .services__items {
      display: flex;
      gap: 10rem;
      justify-content: space-between;
      margin-top: 5rem;
    }
  }

  .contact__banner {
    padding: 10rem 0;
    .contact__wrapper {
      background-color: var(--deep-dark);
      border-radius: 12px;
      padding: 5rem 0rem;
      text-align: center;
      p {
        font-size: 1.8rem;
      }
      .contact__heading {
        font-size: 4rem;
        margin-bottom: 5rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero__heading {
      font-size: 1.5rem;
      .hero__name {
        font-size: 4rem;
      }
    }
    .hero__info {
      .buttons {
        a {
          margin: 0.5rem;
        }
      }
    }

    .scroll__icon {
      margin-top: 0;
    }

    .services__section {
      .services__items {
        flex-direction: column;
        max-width: 350px;
        margin: 0 auto;
        margin-top: 5rem;
        gap: 5rem;
      }
    }

    .contact__heading {
      font-size: 1.8rem;
    }
  }
`;

export default function Home() {
  return (
    <HomeStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <span className="hero__name">Saksham Agarwal</span>
          </h1>
          <div className="hero__info">
            <PText>
              {
                "I am a Computer Science Student who is looking forward to work with you... I love solving complex problems and bringing concepts to life. With every line of code that I write, I strive to make a new step to explore more."
              }
            </PText>
            <div className="buttons">
              <DownloadCV />
              <Button btnLink="/contact" btnText="Contact" outline={true} />
            </div>
          </div>
        </div>
      </div>

      <div className="scroll__icon">
        <BsArrowDown />
      </div>

      <div className="services__section">
        <div className="container">
          <SectionTitle
            heading="Services"
            subheading="things I can do for you..."
          ></SectionTitle>
          <div className="services__items">
            <ServicesSectionItem
              icon={<MdDesktopMac />}
              title="Web Development"
              desc="I develop responsive and high performance websites asper requirements using React, Django or HTML & CSS only."
            />
            <ServicesSectionItem
              icon={<MdDesktopMac />}
              title="Mobile App Dev"
              desc="I also develop mobile applications asper requirements using Flutter & Dart."
            />
            <ServicesSectionItem
              icon={<MdDesktopMac />}
              title="Web Crawling"
              desc="I can scrape data from web and provide it in required formats using Python / NodeJS."
            />
          </div>
        </div>
      </div>

      <TestimonialsSection />
      <div className="contact__banner">
        <div className="container">
          <div className="contact__wrapper">
            <PText>Have a project in mind ?</PText>
            <h3 className="contact__heading">Let me help you</h3>
            <Button btnText="Contact Now" btnLink="/contact"></Button>
          </div>
        </div>
      </div>
    </HomeStyles>
  );
}
