import { Card, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AiFillGithub, AiFillGitlab, AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiScrum } from "react-icons/di";
import {
  SiJavascript,
  SiRedux,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiNodemon,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMaterialui,
  SiChakraui,
  SiFigma,
  SiVim,
  SiVisualstudio,
} from "react-icons/si";
import { MdHttp } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";

const Knowledge = () => {
  const iconSize = {
    fontSize: "40px",
    color: "#fff",
  };

  return (
    <Paper
      id="Knowledge"
      elevation={0}
      sx={{
        backgroundColor: "#2D2E32",
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
          width: "90%",
          height: "600px",
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Card
          sx={{
            width: "90%",
            maxWidth: "400px",
            height: "150px",
            padding: "20px",
            backgroundColor: "#444549",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            transition: "0.2s",
            "&:hover": {
              maxWidth: "420px",
              height: "170px",
              boxShadow: "0 0 15px #1b1b1b",
              transition: "0.2s",
            },
          }}
        >
          <Typography sx={{ color: "#5CC185" }}>Front-End</Typography>
          <Typography sx={{ color: "#80828A" }}>
            Where I explore creativity...
          </Typography>
          <Typography sx={{ color: "#CCCCCC" }}>10 Projects</Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <AiFillHtml5 style={iconSize} />
            <DiCss3 style={iconSize} />
            <SiJavascript style={iconSize} />
            <SiTypescript style={iconSize} />
            <SiReact style={iconSize} />
            <SiRedux style={iconSize} />
            <MdHttp style={iconSize} />
          </Box>
        </Card>
        <Card
          sx={{
            width: "90%",
            maxWidth: "400px",
            height: "150px",
            padding: "20px",
            backgroundColor: "#444549",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            transition: "0.2s",
            "&:hover": {
              maxWidth: "420px",
              height: "170px",
              boxShadow: "0 0 15px #1b1b1b",
              transition: "0.2s",
            },
          }}
        >
          <Typography sx={{ color: "#5CC185" }}>Back-End</Typography>
          <Typography sx={{ color: "#80828A" }}>
            Where I exercise my logic...
          </Typography>
          <Typography sx={{ color: "#CCCCCC" }}>10 Projects</Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <SiNodedotjs style={iconSize} />
            <SiNodemon style={iconSize} />
            <SiExpress style={iconSize} />
            <SiTypescript style={iconSize} />
            <SiPostgresql style={iconSize} />
            <SiMongodb style={iconSize} />
            <TbApi style={iconSize} />
          </Box>
        </Card>
        <Card
          sx={{
            width: "90%",
            maxWidth: "400px",
            height: "150px",
            padding: "20px",
            backgroundColor: "#444549",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            transition: "0.2s",
            "&:hover": {
              maxWidth: "420px",
              height: "170px",
              boxShadow: "0 0 15px #1b1b1b",
              transition: "0.2s",
            },
          }}
        >
          <Typography sx={{ color: "#5CC185" }}>Tools</Typography>
          <Typography sx={{ color: "#80828A" }}>
            They really save my time...
          </Typography>
          {/* <Typography sx={{ color: "#CCCCCC" }}>10 Projects</Typography> */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <FaGitAlt style={iconSize} />
            <AiFillGithub style={iconSize} />
            <AiFillGitlab style={iconSize} />
            <DiScrum style={iconSize} />
            <SiMaterialui style={iconSize} />
            <SiChakraui style={iconSize} />
            <SiFigma style={iconSize} />
            <SiVisualstudio style={iconSize} />
            <SiVim style={iconSize} />
          </Box>
        </Card>
      </Box>
    </Paper>
  );
};

export default Knowledge;
