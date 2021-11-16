import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Container,
} from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router";
import CircleLoad from "../components/Shared/CircleLoad";
import { useFirestoreCollection } from "../hooks/useFirestoreCollection";

const Projects = () => {
  const { data: allProjects, isLoading } = useFirestoreCollection("projects");
  const navigate = useNavigate();

  if (isLoading) return <CircleLoad />;

  return (
    <div>
      <Container>
        <Box display="flex" flexWrap="wrap">
          {allProjects.map(({ domain, title, summary, id, images, folder }) => (
            <Card key={title} style={{ margin: "1em", maxWidth: "575px" }}>
              <CardActionArea onClick={() => navigate(id)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={`/images/${folder}/${images[0].fileName}`}
                  alt={images[0].legend}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {title} - {domain}
                  </Typography>
                  <Typography variant="body2">{summary}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => navigate(id)}
                >
                  Détails
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default Projects;
