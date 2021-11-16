import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import React from "react";
import Gist from "react-gist";
import { useParams } from "react-router-dom";
import CircleLoad from "../components/Shared/CircleLoad";
import { useFirestoreCollectionWithId } from "../hooks/useFirestoreCollection";

const ProjectDetail = () => {
  const { id: projectID } = useParams();
  const { data: projectData, isLoading } = useFirestoreCollectionWithId(
    "projects",
    projectID
  );

  if (isLoading) return <CircleLoad />;
  if (projectData === undefined) return <p>Projet introuvable</p>;

  const { title, tech, team, scripts, domain, summary, url } = projectData;

  return (
    <Container>
      <Paper style={{ padding: "1em" }}>
        <Typography variant="h3">{title}</Typography>
        <Divider />
        <Box marginTop="3em">
          <Typography variant="h5" style={{ marginBottom: "1em" }}>
            {domain}
          </Typography>
          <Typography variant="body2" style={{ textIndent: "1em" }}>
            {summary}
          </Typography>
          {url !== "" ? (
            <Link href={url} target="_blank" variant="h6">
              Voir l'application
            </Link>
          ) : (
            <></>
          )}
        </Box>
        {team.length > 0 ? (
          <Box marginTop="3em">
            <Typography variant="h5">Coéquipiers</Typography>
            <List>
              {team.map((nom) => (
                <ListItem key={nom} sx={{ padding: 0 }}>
                  <ListItemText primary={nom} />
                </ListItem>
              ))}
            </List>
          </Box>
        ) : (
          <></>
        )}
        {tech.length > 0 ? (
          <Box marginTop="3em">
            <Typography variant="h5">Technologies</Typography>
            <List>
              {tech.map((nom) => (
                <ListItem key={nom}>
                  <ListItemText primary={nom} />
                </ListItem>
              ))}
            </List>
          </Box>
        ) : (
          <></>
        )}
        <Box marginTop="3em">
          <Typography variant="h5" style={{ marginBottom: "1em" }}>
            Quelques scripts...
          </Typography>
          {scripts.map(({ fileName, gist }) => (
            <Accordion key={fileName}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>{fileName}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Gist id={gist} file={fileName} />
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default ProjectDetail;
