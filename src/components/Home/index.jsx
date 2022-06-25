import { Avatar, Card, Link, Paper, Typography } from "@mui/material";
import profile_picture from "../../assets/profile_picture.jpg";

const Home = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#2D2E32",
        maxWidth: "100vw",
        height: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "0",
      }}
    >
      <Avatar
        src={profile_picture}
        alt="Rafhael Mallorga Picture"
        sx={{
          width: "200px",
          height: "200px",
          margin: "20px",
        }}
      />
      <Card
        elevation={0}
        sx={{
          width: "90%",
          backgroundColor: "#2D2E32",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-around",
          flexGrow: "1",
        }}
      >
        <Card
          sx={{
            padding: "2px 20px",
            backgroundColor: "#6EF2A4",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
            }}
          >
            Full-Stack Developer
          </Typography>
        </Card>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "24px",
          }}
        >
          Hello,
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "24px",
          }}
        >
          My name is Rafhael Mallorga and I'm a Full-Stack Junior Developer. . .
        </Typography>
        <Typography
          sx={{
            color: "#646569",
            fontSize: "14px",
          }}
        >
          I'm in the middle of a carrear change, very excited to learn more and
          more every day. . .
        </Typography>
        <Link
          href="#"
          sx={{
            color: "#5CC185",
            fontSize: "20px",
            textDecoration: "none",
            width: "90%",
          }}
        >
          HIRE ME!
        </Link>
        <Card
          elevation={0}
          sx={{
            display: "flex",
            backgroundColor: "#2D2E32",
          }}
        >
          <Typography sx={{ color: "#fff", fontSize: "30px" }}>1</Typography>
          <Typography
            sx={{
              color: "#646569",
              fontSize: "14px",
              width: "80px",
              marginLeft: "10px",
            }}
          >
            YEAR OF EXPERIENCE
          </Typography>
        </Card>
      </Card>
    </Paper>
  );
};

export default Home;
