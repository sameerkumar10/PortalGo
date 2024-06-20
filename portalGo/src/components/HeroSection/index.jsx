import React, { useState } from "react";
import Video from "../../assets/videos/video.mp4";
import Modal from "./Modal";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

 const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Virtual Banking Made Easy</HeroH1>
          <HeroP>
            SignUp for a new Account today and receive $250 in Credit Towards
            your next payment.
          </HeroP>
          <HeroBtnWrapper>
            {!showModal && (
              <Button
                to="home"
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                dark="true"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                onClick={() => setShowModal(true)}
              >
                Request the Demo {hover ? <ArrowForward /> : <ArrowRight />}
              </Button>
            )}
             {showModal && <Modal onClose={()=>setShowModal(false)} />}
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
     
    </>
  );
};

export default HeroSection;
