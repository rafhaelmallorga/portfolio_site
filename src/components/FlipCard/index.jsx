import { Card, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";

const FlipCard = ({ project }) => {
  const { title, description, img, appLink, repoLink } = project;

  const linkStyle = {
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "'Anonymous Pro', monospace",
    width: "40%",
    backgroundColor: "#5CC185",
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
    padding: "10px 0",
    borderRadius: "5px",
  };

  return (
    <Card
      sx={{
        width: "90%",
        maxWidth: "250px",
        height: "350px",

        backgroundColor: "#25262A",
        perspective: "1000px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          transition: "transform 0.8s",
          transformStyle: "preserve-3d",
          "&:hover": {
            transform: "rotateY(180deg)",
          },
        }}
      >
        <Box
          sx={{
            transform: "translate(1px)",
            position: "absolute",
            width: "100%",
            height: "100%",
            "-webkit-backface-visibility": "hidden",
            backfaceVisibility: "hidden",
            img: {
              //   width: "250px",
              height: "100%",
              transform: "translate( -30%, 0)",
            },
          }}
        >
          <img src={img} alt={title} />
        </Box>
        <Box
          sx={{
            backgroundColor: "#444549",
            transform: "rotateY(180deg) translate(1px)",
            position: "absolute",
            width: "100%",
            height: "100%",
            "-webkit-backface-visibility": "hidden",
            backfaceVisibility: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "30px",
              fontWeight: "bold",
              margin: " 20px auto 0 auto",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#ccc",
              fontSize: "16px",
              width: "90%",
              margin: " 0px auto 0 auto",
              textAlign: "justify",
            }}
          >
            {description}
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "20px",
            }}
          >
            <Link href={appLink} style={linkStyle} target="_blank">
              Visit
            </Link>
            <Link href={repoLink} style={linkStyle} target="_blank">
              Repository
            </Link>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default FlipCard;
