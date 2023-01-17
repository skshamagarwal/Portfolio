import React, { Component } from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import CardItem from '../components/CardItem';

const CetrificationStyles = styled.div`
  padding-top: 10rem;
  min-height: 100vh;

  .cards {
    padding: 4rem;
  }

  h1 {
    text-align: center;
  }

  .cards__container {
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1120px;
    width: 90%;
    margin: 0 auto;
  }

  .cards__wrapper {
    position: relative;
    margin: 50px 0 45px;
  }

  .cards__items {
    margin-bottom: 24px;
  }

  .cards__item {
    display: flex;
    flex: 1;
    margin: 0 1rem;
    border-radius: 10px;
  }

  .cards__item__link {
    display: flex;
    flex-flow: column;
    width: 100%;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
  }

  .cards__item__pic-wrap {
    position: relative;
    width: 100%;
    padding-top: 67%;
    overflow: hidden;
  }

  .fade-img {
    animation-name: fade-img;
    animation-duration: 2s;
  }

  .cards__item__pic-wrap::after {
    content: attr(data-category);
    position: absolute;
    bottom: 0;
    margin-left: 10px;
    padding: 6px 8px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    background-color: #1f98f4;
    box-sizing: border-box;
  }

  .cards__item__img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;
  }

  .cards__item__img:hover {
    transform: scale(1.1);
  }

  .cards__item__info {
    padding: 20px 30px 30px;
  }

  .cards__item__text {
    color: #252e48;
    font-size: 18px;
    line-height: 24px;
  }

  @media only screen and (min-width: 1200px) {
    .content__blog__container {
      width: 84%;
    }
  }

  @media only screen and (min-width: 1024px) {
    .cards__items {
      display: flex;
    }
  }

  @media only screen and (max-width: 1024px) {
    .cards__item {
      margin-bottom: 2rem;
    }
  }
`;

export class Certifications extends Component {
  render() {
    return (
      <CetrificationStyles>
        <SectionTitle
          heading="CERTIFICATIONS"
          subheading="addon courses and other certificates"
        />
        <div className="container">
        <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="C:\Users\saksham\Desktop\projects\portfolio\src\assets\images\cap.JPG"
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='https://en.wikipedia.org/wiki/Image'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://en.wikipedia.org/wiki/Image'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='https://en.wikipedia.org/wiki/Image'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='https://en.wikipedia.org/wiki/Image'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
        </div>
      </CetrificationStyles>
    );
  }
}

export default Certifications;
