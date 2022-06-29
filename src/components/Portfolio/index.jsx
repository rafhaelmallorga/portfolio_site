import { Button, Card, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Carousel from "react-elastic-carousel";
import FlipCard from "../FlipCard";

const backProjects = [
  {
    title: "First CRUD",
    description: "My first CRUD using NodeJS and Express.",
    img: require("../../assets/background_code.jpg"),
    appLink:
      "https://github.com/Kenzie-Academy-Brasil-Developers/m4-entrega-sprint1-rafhaelmallorga/tree/master/src",
    repoLink:
      "https://github.com/Kenzie-Academy-Brasil-Developers/m4-entrega-sprint1-rafhaelmallorga/tree/master/src",
  },
];

const frontProjects = [
  {
    title: "Kenzie Hub",
    description:
      "User creation and login application project where user can create a list of tools and their knowledge level. Used axios for posts and gets in the api and styled-components for styling.",
    img: require("../../assets/kenziehub.png"),
    appLink:
      "https://react-entrega-s2-kenzie-hub-rafhaelmallorga-pjlbse9sb.vercel.app/login",
    repoLink:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-rafhaelmallorga",
  },
  {
    title: "Kenzie Shop",
    description:
      "Ecommerce project where it is possible to add and remove items to the cart. Used axios for posts and gets in the api.",
    img: require("../../assets/kenzieshop.png"),
    appLink:
      "https://react-entrega-s1-hamburgueria-da-kenzie-rafhaelmallorga.vercel.app/",
    repoLink:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-rafhaelmallorga",
  },
  {
    title: "Nu Kenzie",
    description:
      "Financial control application. Registration of inputs and outputs and balance using ReactJS.",
    img: require("../../assets/nu_kenzie.png"),
    appLink: "https://react-entrega-s1-nu-kenzie-rafhaelmallorga.vercel.app/",
    repoLink:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-rafhaelmallorga",
  },
  {
    title: "Pokemon Store",
    description: "Pokemon sales app using ReactJS.",
    img: require("../../assets/pokemon_store.png"),
    appLink:
      "https://react-entrega-s3-kenzishop-com-context-api-rafhaelma-by1fpfgz5.vercel.app/",
    repoLink:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzishop-com-context-api-rafhaelmallorga",
  },
  {
    title: "GitHub API",
    description:
      "Application for querying and storing repositories using the GitHub api - ReactJS and MUI",
    img: require("../../assets/github_api.png"),
    appLink:
      "https://react-atividade-s2-github-card-rafhaelmallorga-mlwl4tnrq.vercel.app/",
    repoLink:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-atividade-s2-github-card-rafhaelmallorga",
  },
  {
    title: "Kenziebook",
    description:
      "Reproduction of Facebook registration form - ReactJS and MUI.",
    img: require("../../assets/facebook_register.png"),
    appLink:
      "https://react-atividade-s2-praticando-forms-rafhaelmallorga-a6g2ik8kc.vercel.app/",
    repoLink:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-atividade-s2-praticando-forms-rafhaelmallorga",
  },
  {
    title: "Rick and Morty",
    description: "Rick and Morty API Consumption - React JS.",
    img: require("../../assets/rick_and_morty.png"),
    appLink: "https://rickandmortyparte2.vercel.app/",
    repoLink:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-atividade-s1-buscando-dados-na-api-rick-and-morty-rafhaelmallorga",
  },
];

const Portfolio = () => {
  const [isFrontEnd, setIsFrontEnd] = useState(true);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <Paper
      id="Portfolio"
      elevation={0}
      sx={{
        backgroundColor: "#25262A",
        maxWidth: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "0",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button
          onClick={() => setIsFrontEnd(true)}
          sx={{ color: "#5CC185", fontWeight: "bold" }}
        >
          Front-End
        </Button>
        <Button
          onClick={() => setIsFrontEnd(false)}
          sx={{ color: "#fff", fontWeight: "bold" }}
        >
          Back-End
        </Button>
      </Box>
      <Box
        sx={{
          width: "90%",
        }}
      >
        <Carousel breakPoints={breakPoints}>
          {isFrontEnd
            ? frontProjects.map((project, index) => (
                <FlipCard key={index} project={project} />
              ))
            : backProjects.map((project, index) => (
                <FlipCard key={index} project={project} />
              ))}
        </Carousel>
      </Box>
    </Paper>
  );
};

export default Portfolio;
