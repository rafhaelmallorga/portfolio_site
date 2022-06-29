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
          width: "90%",
          maxWidth: "400px",
          height: "100%",
          maxHeight: "450px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Typography
          component="h3"
          sx={{
            color: "#5CC185",
            marginBottom: "20px",
          }}
        >
          CONTACT ME
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          style={inputStyle}
          margin="dense"
          size="small"
        />
        <TextField
          label="Email"
          variant="outlined"
          style={inputStyle}
          size="small"
        />
        <TextField
          label="Phone"
          variant="outlined"
          style={inputStyle}
          size="small"
        />
        <TextField
          label="Let your message..."
          variant="outlined"
          multiline
          rows={4}
          style={inputStyle}
          size="small"
        />
        <Button variant="contained">Send</Button>
      </Box>
    </Paper>
  );
};

export default Contact;
