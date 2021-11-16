import { Container, Paper, Typography } from "@material-ui/core";
import React from "react";

const Homepage = () => {
  return (
    <Container>
      <Paper style={{ padding: "1em 0.5em", maxWidth: "500px" }}>
        <Typography variant="h5">DÉVELOPPEUR WEB</Typography>
        <Typography variant="h2" style={{ fontWeight: 900 }}>
          Charles-O.
        </Typography>
        <Typography variant="body1" style={{ marginTop: "1em" }}>
          Je suis étudiant-finissant en Techniques d’intégration multimédia,
          profil programmation.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Homepage;
