import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ProjectIcon from "@mui/icons-material/AccountTree";
import AboutIcon from "@mui/icons-material/Info";
import ContactIcon from "@mui/icons-material/Email";

import { useMenu } from "../../context/menuContext";
import { useNavigate } from "react-router";
import CircleLoad from "../Shared/CircleLoad";

const SideMenu = () => {
  const { menuToggle, toggleMenuDrawer, menuLoad } = useMenu();
  const navigate = useNavigate();

  if (menuLoad) return <CircleLoad />;

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleMenuDrawer(anchor, false)}
      onKeyDown={toggleMenuDrawer(anchor, false)}
    >
      <List>
        <ListItem button onClick={() => navigate("")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Accueil" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => navigate("projects")}>
          <ListItemIcon>
            <ProjectIcon />
          </ListItemIcon>
          <ListItemText primary="Projets" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => navigate("about")}>
          <ListItemIcon>
            <AboutIcon />
          </ListItemIcon>
          <ListItemText primary="À propos" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => navigate("contact")}>
          <ListItemIcon>
            <ContactIcon />
          </ListItemIcon>
          <ListItemText primary="Contacter" />
        </ListItem>
        <Divider />
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key="left">
        <Drawer
          anchor="left"
          open={menuToggle["left"]}
          onClose={toggleMenuDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default SideMenu;
