import { Container, Paper, Typography } from "@material-ui/core";
import React from "react";

const Homepage = () => {
  return (
    <Container>
      <Paper style={{ padding: "0.5em" }}>
        <Typography variant="h5">DÉVELOPPEUR WEB</Typography>
        <Typography variant="h2">Charles-O.</Typography>
        <Typography variant="body2" style={{ marginTop: "1em" }}>
          Je suis étudiant-finissant en Techniques d’intégration multimédia,
          profil programmation.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Homepage;
