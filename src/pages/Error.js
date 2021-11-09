import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      This page does not exist!
      <Button onClick={() => navigate("/homepage")}>Homepage</Button>
    </div>
  );
};

export default Error;
