import { useTheme } from "@emotion/react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, MobileStepper, Paper, Typography } from "@mui/material";
import React from "react";
import background_code from "../../assets/background_code.jpg";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const steps = [
  {
    tag: "Introduce",
    label: "Hello, I'm Rafhael Mallorga",
    phrase: "Starting a new adventure",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, accusantium eligendi ut fugit eum architecto perferendis asperiores tempora dignissimos? Neque iure porro facere quasi, dolores eum dolorum ad sapiente rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, accusantium eligendi ut fugit eum architecto perferendis asperiores tempora dignissimos? Neque iure porro facere quasi, dolores eum dolorum ad sapiente rem.",
  },
  {
    tag: "Experience",
    label: "Hello, I'm Rafhael Mallorga",
    phrase: "Starting a new adventure",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, accusantium eligendi ut fugit eum architecto perferendis asperiores tempora dignissimos? Neque iure porro facere quasi, dolores eum dolorum ad sapiente rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, accusantium eligendi ut fugit eum architecto perferendis asperiores tempora dignissimos? Neque iure porro facere quasi, dolores eum dolorum ad sapiente rem.",
  },
  {
    tag: "Introduce",
    label: "Hello, I'm Rafhael Mallorga",
    phrase: "Starting a new adventure",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, accusantium eligendi ut fugit eum architecto perferendis asperiores tempora dignissimos? Neque iure porro facere quasi, dolores eum dolorum ad sapiente rem.",
  },
  {
    tag: "Introduce",
    label: "Hello, I'm Rafhael Mallorga",
    phrase: "Starting a new adventure",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, accusantium eligendi ut fugit eum architecto perferendis asperiores tempora dignissimos? Neque iure porro facere quasi, dolores eum dolorum ad sapiente rem.",
  },
];

const About = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Paper
      id="About"
      elevation={0}
      sx={{
        backgroundColor: "#25262A",
        maxWidth: "100vw",
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
      <Box sx={{ width: "100%", maxWidth: 800 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            color: "#fff",
            backgroundColor: "transparent",
          }}
        ></Paper>
        <Box sx={{ height: "100%", width: "100%" }}>
          <Typography sx={{ fontSize: "16px", color: "#999ba0" }}>
            {steps[activeStep].tag}
          </Typography>
          <Typography sx={{ fontSize: "30px", color: "#fff" }}>
            {steps[activeStep].label}
          </Typography>
          <Typography sx={{ fontSize: "22px", color: "#fff" }}>
            {steps[activeStep].phrase}
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#999ba0" }}>
            {steps[activeStep].description}
          </Typography>
        </Box>
        <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{ backgroundColor: "transparent" }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </Paper>
  );
};

export default About;
