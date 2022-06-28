import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider, Drawer, Link, List } from "@mui/material";
import { BsLinkedin, BsGithub } from "react-icons/bs";
// import ListItemIcon from "@mui/material/ListItemIcon";

const navLinkStyle = {
  color: "#fff",
  fontWeight: "bold",

  textDecoration: "none",
  margin: "0 5px",
};

export default function Header() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const menuOptions = ["Home", "About", "Knowledge", "Portfolio", "Contact"];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: "100%",
        backgroundColor: "#2D2E32",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography
        variant="span"
        component="div"
        sx={{
          color: "#6EF2A4",
          fontSize: "24px",
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Roboto', sans-serif;",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            fontFamily: "'Roboto', sans-serif;",
            marginRight: "10px",
          }}
        >
          Rafhael
        </Typography>
        Mallorga
      </Typography>

      <List
        sx={{
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Link style={navLinkStyle} href="#Home" sx={{ margin: "20px 20px" }}>
          <Typography
            variant="span"
            sx={{
              fontSize: "26px",
              margin: "20px",
              fontFamily: "'Anonymous Pro', monospace;",
            }}
          >
            &#60;Home &#47;&#62;
          </Typography>
        </Link>
        <Link style={navLinkStyle} href="#About">
          <Typography
            variant="span"
            sx={{
              fontSize: "26px",
              margin: "20px",
              fontFamily: "'Anonymous Pro', monospace;",
            }}
          >
            &#60;About &#47;&#62;
          </Typography>
        </Link>
        <Link style={navLinkStyle} href="#Knowledge">
          <Typography
            variant="span"
            sx={{
              fontSize: "26px",
              margin: "20px",
              fontFamily: "'Anonymous Pro', monospace;",
            }}
          >
            &#60;Knowledge &#47;&#62;
          </Typography>
        </Link>
        <Link style={navLinkStyle} href="#Portfolio">
          <Typography
            variant="span"
            sx={{
              fontSize: "26px",
              margin: "20px",
              fontFamily: "'Anonymous Pro', monospace;",
            }}
          >
            &#60;Portfolio &#47;&#62;
          </Typography>
        </Link>
        <Link style={navLinkStyle} href="#Contact">
          <Typography
            variant="span"
            sx={{
              fontSize: "26px",
              margin: "20px",
              fontFamily: "'Anonymous Pro', monospace;",
            }}
          >
            &#60;Contact &#47;&#62;
          </Typography>
        </Link>
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#2D2E32",
          flexGrow: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          variant="section"
          sx={{
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          <AppBar
            elevation={0}
            position="fixed"
            sx={{
              width: "100%",
              backgroundColor: "#2D2E32",
            }}
          >
            <Toolbar sx={{}}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{
                  mr: 2,

                  "@media (min-width: 800px)": {
                    display: "none",
                  },
                }}
                onClick={toggleDrawer("left", true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h1"
                component="div"
                sx={{
                  fontSize: "24px",
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "'Roboto', sans-serif;",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    fontFamily: "'Roboto', sans-serif;",
                    marginRight: "10px",
                  }}
                >
                  Rafhael
                </Typography>
                Mallorga
              </Typography>
              <Box
                variant="div"
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Box
                  variant="nav"
                  sx={{
                    width: "65%",
                    display: "flex",
                    justifyContent: "space-between",
                    textDecoration: "none",
                    "@media (max-width: 800px)": {
                      display: "none",
                    },
                  }}
                >
                  <Link style={navLinkStyle} href="#Home">
                    <Typography
                      variant="span"
                      sx={{ fontFamily: "'Anonymous Pro', monospace;" }}
                    >
                      &#60;Home &#47;&#62;
                    </Typography>
                  </Link>
                  <Link style={navLinkStyle} href="#About">
                    <Typography
                      variant="span"
                      sx={{
                        fontFamily: "'Anonymous Pro', monospace;",
                      }}
                    >
                      &#60;About &#47;&#62;
                    </Typography>
                  </Link>
                  <Link style={navLinkStyle} href="#Knowledge">
                    <Typography
                      variant="span"
                      sx={{ fontFamily: "'Anonymous Pro', monospace;" }}
                    >
                      &#60;Knowledge &#47;&#62;
                    </Typography>
                  </Link>
                  <Link style={navLinkStyle} href="#Portfolio">
                    <Typography
                      variant="span"
                      sx={{ fontFamily: "'Anonymous Pro', monospace;" }}
                    >
                      &#60;Portfolio &#47;&#62;
                    </Typography>
                  </Link>
                  <Link style={navLinkStyle} href="#Contact">
                    <Typography
                      variant="span"
                      sx={{ fontFamily: "'Anonymous Pro', monospace;" }}
                    >
                      &#60;Contact &#47;&#62;
                    </Typography>
                  </Link>
                </Box>
              </Box>
              <Link
                href="https://www.linkedin.com/in/rafhael-mallorga-44632494/"
                target="_blank"
                color={"#fff"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <Typography
                  variant="span"
                  sx={{
                    color: "#646569",
                    fontFamily: "'Roboto', sans-serif;",
                    "@media (max-width: 800px)": {
                      display: "none",
                    },
                  }}
                >
                  LinkedIn
                </Typography>
                <Box sx={{ marginLeft: "10px" }}>
                  <BsLinkedin color="#6EF2A4" />
                </Box>
              </Link>
              <Link
                href="https://github.com/rafhaelmallorga"
                target="_blank"
                color={"#fff"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <Typography
                  variant="span"
                  sx={{
                    color: "#646569",
                    fontFamily: "'Roboto', sans-serif;",
                    marginLeft: "10px",
                    "@media (max-width: 800px)": {
                      display: "none",
                    },
                  }}
                >
                  GitHub
                </Typography>
                <Box sx={{ marginLeft: "10px" }}>
                  <BsGithub color="#6EF2A4" />
                </Box>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
      </Box>
      <div>
        <React.Fragment key={"left"}>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
}
