import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Container,
} from "@material-ui/core";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIosNew";
import { useLocation, useNavigate } from "react-router";
import { useMenu } from "../../context/menuContext";

const Header = () => {
  const location = useLocation();
  const { toggleMenuDrawer } = useMenu();
  const pageTitle = location.pathname.split("/")[1];

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Container>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleMenuDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flex: 1 }} component="div">
              {pageTitle !== "" ? pageTitle : "homepage"}
            </Typography>
            {pageTitle !== "" ? (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => navigate(-1)}
              >
                <ArrowBackIcon />
              </IconButton>
            ) : (
              <></>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <div style={{ height: "6em" }} />
    </Box>
  );
};

export default Header;
