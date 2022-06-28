import { Button, Card, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

const inputStyle = {
  backgroundColor: "#fff",
  borderRadius: "4px",
};

const Contact = () => {
  return (
    <Paper
      id="Contact"
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
        component="form"
        sx={{
          height: "100%",
          maxHeight: "430px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Typography component="h3">CONTACT ME</Typography>
        <TextField label="Name" variant="outlined" style={inputStyle} />
        <TextField label="Email" variant="outlined" style={inputStyle} />
        <TextField label="Phone" variant="outlined" style={inputStyle} />
        <TextField
          label="Let your message..."
          variant="outlined"
          multiline
          rows={4}
          style={inputStyle}
        />
        <Button variant="contained">Send</Button>
      </Box>
    </Paper>
  );
};

export default Contact;
