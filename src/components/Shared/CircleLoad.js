import { CircularProgress, Container } from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";

const CircleLoad = () => {
  return (
    <Container>
      <Box>
        <CircularProgress />
      </Box>
    </Container>
  );
};

export default CircleLoad;
