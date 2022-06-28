import { Avatar, Box, Card, Link, Paper, Typography } from "@mui/material";
import profile_picture from "../../assets/profile_picture.jpg";

const Home = () => {
  return (
    <Paper
      id="Home"
      elevation={0}
      sx={{
        backgroundColor: "#2D2E32",
        width: "100%",
        height: "100vh",
        display: "flex",

        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "0",
        "@media (min-width: 700px)": {
          flexDirection: "row-reverse",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          "@media (min-width: 700px)": {
            flexDirection: "row-reverse",
          },
        }}
      >
        <Avatar
          src={profile_picture}
          alt="Rafhael Mallorga Picture"
          sx={{
            width: "200px",
            height: "200px",
            margin: "20px",
            "@media (min-width: 800px)": {
              width: "300px",
              height: "300px",
            },
            "@media (min-width: 1200px)": {
              width: "550px",
              height: "550px",
            },
          }}
        />
        <Card
          elevation={0}
          sx={{
            width: "90%",
            maxWidth: "400px",
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
              "@media (min-width: 800px)": {
                marginBottom: "20px",
              },
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
              fontSize: "22px",
              fontFamily: "'Anonymous Pro', monospace;",
              "@media (min-width: 800px)": {
                fontSize: "26px",
              },
            }}
          >
            Hello,
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "22px",
              fontFamily: "'Anonymous Pro', monospace;",
              "@media (min-width: 800px)": {
                fontSize: "26px",
                marginBottom: "20px",
              },
            }}
          >
            My name is Rafhael Mallorga and I'm a Full-Stack Junior Developer. .
            .
          </Typography>
          <Typography
            sx={{
              color: "#646569",
              fontSize: "14px",
              "@media (min-width: 800px)": {
                marginBottom: "30px",
              },
            }}
          >
            I'm in the middle of a carrear change, very excited to learn more
            and more every day. . .
          </Typography>
          <Link
            href="#"
            sx={{
              color: "#5CC185",
              fontSize: "20px",
              textDecoration: "none",
              width: "90%",
              fontFamily: "'Anonymous Pro', monospace;",
              "@media (min-width: 800px)": {
                marginTop: "30px",
                marginBottom: "30px",
              },
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
      </Box>
    </Paper>
  );
};

export default Home;
