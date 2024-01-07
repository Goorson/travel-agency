import React from 'react';
import { CarouselProvider, Slider, Slide,  ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Button } from './Button';
import './MainSection.css'

const MainSection = () => {
  return (
    <CarouselProvider
     naturalSlideWidth={100}
     naturalSlideHeight={100}
     totalSlides={3}
    >

    <Slider className='carousel'>
      <Slide index={0} className='carousel-slide'>
      <div className='carousel-image-container'>
            <video className='carousel-image' src={'Beach2.mp4'} autoPlay loop muted/>
        </div>
        <div className='carousel-content'>
          <h1>Get away destinations</h1>
          <p>Who doesn't want to enjoy paradise in private</p>
          <div className='main-btns'>
            <Button className='btns left' buttonStyle='btn--outline' buttonSize='btn--large'>
              Start!
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
              OUR INSTAGRAM
            </Button>
          </div>
        </div>
      </Slide>
      <Slide index={1}>
        <div className='carousel-image-container'>
            <img className='carousel-image' src={'Plane.jpg'} alt='hello' />
        </div>
        <div className='carousel-content'>
          <h1>Direct Flights</h1>
          <p>Enjoy safe flights to your destination</p>
          <div className='main-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
              Start!
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
              OUR INSTAGRAM
            </Button>
          </div>
        </div></Slide>
      <Slide index={2}>
      <div className='carousel-image-container'>
            <img className='carousel-image' src={'Malediwy.jpg'} alt='hello' />
        </div>
        <div className='carousel-content'>
          <h1>Full flexibility</h1>
          <p>Custom travel plans</p>
          <div className='main-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
              Start!
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
              OUR INSTAGRAM
            </Button>
          </div>
        </div>
      </Slide>
    </Slider>

    <ButtonBack className='carousel-btn left'>&lt;</ButtonBack>
    <ButtonNext className='carousel-btn right'>&gt;</ButtonNext>

   </CarouselProvider>
  );
};
export default MainSection;