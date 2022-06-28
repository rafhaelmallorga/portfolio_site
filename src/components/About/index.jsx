import { useTheme } from "@emotion/react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, MobileStepper, Paper, Typography } from "@mui/material";
import React from "react";
import background_code from "../../assets/background_code.jpg";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Carousel from "react-elastic-carousel";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const steps = [
  {
    tag: "Introduce",
    label: "Hello, I'm Rafhael Mallorga",
    phrase: "Starting on a new adventure",
    description:
      "I've been studying web development at Kenzie Academy for the last year, where I've been immersed in Front and Back-End development. I also had the opportunity to work as a coach for younger students, helping them with any doubts. Some of the technologies I had contact with are: HTML, CSS, JavaScript, TypeScipt, MUI, Chakra UI, NodeJS, Express, Docker, PostegreSQL, MongoDB, and others...",
  },
  {
    tag: "Experience",
    label: "What I've been doing?",
    phrase: "A brief summary of my journey...",
    description:
      "My first contact with computing was an hardware course when I was 16, but around that time I realized that hardware wasn't exactly what I wanted to do. I worked for a while as an account manager at a software company, but just a year ago I had the opportunity to actually study programming and then I discovered that programming was exactly what I was looking for.",
  },
  {
    tag: "Graduation",
    label: "And about my education background?",
    phrase: "Could this experience help me in programming?",
    description:
      "My original degree was in Civil Aviation at Universidade Anhembi Morumbi and my practical training at Aeroclube de São Paulo as a commercial aircraft pilot. I have 10 years of experience and my main occupation was as a flight instructor. My experience as a flight instructor provided me with some very important soft skills for any area, such as clear communication, assertiveness, risk management, CRM, etc...",
  },
  {
    tag: "Future",
    label: "What are my plans?",
    phrase: "A drop in the ocean...",
    description:
      "I'm very new to the world of programming and the more I learn, the more I'm fascinated by the range of possibilities. My main goal today is to improve myself in Front and Back-End web development to have a solid foundation, and in the future to venture into blockchain and metaverse.",
  },
];

const About = () => {
  return (
    <Paper
      id="About"
      elevation={0}
      sx={{
        backgroundColor: "#25262A",
        maxWidth: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0",
        backgroundImage: `linear-gradient(90deg, #25262ae2, #25262a), url(${background_code})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          width: "90%",
        }}
      >
        <Carousel>
          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                "@media (min-width: 800px)": {
                  width: "400px",
                },
              }}
            >
              <Typography
                variant="span"
                sx={{
                  margin: "20px 0",
                  color: "#8b8c92",
                  fontFamily: "'Roboto', sans-serif",
                }}
              >
                {step.tag}
              </Typography>
              <Typography variant="h3" sx={{ fontSize: "30px", color: "#fff" }}>
                {step.label}
              </Typography>
              <Typography
                variant="p"
                sx={{
                  color: "#fff",
                  margin: "20px 0",
                  fontFamily: "'Roboto', sans-serif",
                  fontStyle: "italic",
                }}
              >
                {step.phrase}
              </Typography>
              <Typography
                variant="p"
                sx={{
                  color: "#8b8c92",
                  fontFamily: "'Roboto', sans-serif",
                  textAlign: "justify",
                }}
              >
                {step.description}
              </Typography>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Paper>
  );
};

export default About;
