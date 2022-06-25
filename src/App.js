import { Button, Paper } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Page from "./page";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ff0000",
    },
  },
});

function App() {
  return (
    <Paper
      elevation={0}
      theme={theme}
      sx={{
        backgroundColor: "#2D2E32",
        width: "100vw",
        minHeight: "100vh",
      }}
      className="App"
    >
      <Page />
    </Paper>
  );
}

export default App;
