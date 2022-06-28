import { Card, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Carousel from "react-elastic-carousel";

const Portfolio = () => {
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
        <Typography sx={{ color: "#5CC185", fontWeight: "bold" }}>
          Front-End
        </Typography>
        <Typography sx={{ color: "#fff", fontWeight: "bold" }}>
          Back-End
        </Typography>
      </Box>
      <Carousel
        style={{
          backgroundColor: "#fff",
          div: {
            backgroundColor: "#fff",
            button: {
              backgroundColor: "#fff",
            },
          },
        }}
      >
        <Card
          sx={{
            width: "90%",
            maxWidth: "400px",
            padding: "10px",
            backgroundColor: "#444549",
          }}
        >
          <Typography sx={{ color: "#5CC185" }}>Front-End</Typography>
          <Typography sx={{ color: "#80828A" }}>
            Some phrase here about somothing
          </Typography>
          <Typography sx={{ color: "#CCCCCC" }}>10 Projects</Typography>
        </Card>
        <Card
          sx={{
            width: "90%",
            maxWidth: "400px",
            padding: "10px",
            backgroundColor: "#444549",
          }}
        >
          <Typography sx={{ color: "#5CC185" }}>Back-End</Typography>
          <Typography sx={{ color: "#80828A" }}>
            Some phrase here about somothing
          </Typography>
          <Typography sx={{ color: "#CCCCCC" }}>10 Projects</Typography>
        </Card>
        <Card
          sx={{
            width: "90%",
            maxWidth: "400px",
            padding: "10px",
            backgroundColor: "#444549",
          }}
        >
          <Typography sx={{ color: "#5CC185" }}>Tools</Typography>
          <Typography sx={{ color: "#80828A" }}>
            Some phrase here about somothing
          </Typography>
          <Typography sx={{ color: "#CCCCCC" }}>10 Projects</Typography>
        </Card>
      </Carousel>
    </Paper>
  );
};

export default Portfolio;
