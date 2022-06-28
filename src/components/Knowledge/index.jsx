import { Card, Paper, Typography } from "@mui/material";

const Knowledge = () => {
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
    </Paper>
  );
};

export default Knowledge;
