import { FormControl, TextField } from "@material-ui/core";
import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const FormProjects = () => {
  const [projet, setProjet] = useState({
    title: "",
    class: "",
    summary: "",
    team: [],
    tech: [],
    images: [
      {
        alt: "",
        src: "",
      },
    ],
    embedCode: "",
  });
  const [teamate, setTeamate] = useState("");

  const handleChange = (value, prop) => {
    setProjet((currentState) => ({
      ...currentState,
      [prop]: value,
    }));
  };

  const addToArray = (event, prop) => {
    if (event.keyCode === 13 && valid(teamate)) {
      setProjet((currentState) => ({
        team: [...currentState.team, teamate],
      }));

      setTeamate("");
    }
  };

  const valid = (toVerify) => {
    let isValid = false;

    for (const letter of toVerify) {
      if (letter !== " ") isValid = true;
    }

    return isValid;
  };

  const handleTeam = (event) => {
    setTeamate(event.target.value);
  };

  const deleteName = (nom) => {
    const t = projet.team.splice(projet.team.indexOf(nom), 1);

    setProjet((currentState) => ({
      ...currentState,
    }));
  };

  const listItems = projet.team.map((nom, index) => (
    <li key={nom + index}>
      {nom}
      <DeleteForeverIcon onClick={() => deleteName(nom)} />
    </li>
  ));

  return (
    <form>
      <FormControl>
        <TextField
          label="Titre"
          variant="standard"
          onChange={(e) => handleChange(e.target.value, "title")}
        />
        <TextField
          label="Domaine"
          variant="standard"
          onChange={(e) => handleChange(e.target.value, "class")}
        />
        <TextField
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          onChange={(e) => handleChange(e.target.value, "summary")}
        />
        <TextField
          label="Coéquipiers"
          variant="standard"
          value={teamate}
          onChange={handleTeam}
          onKeyDown={(e) => addToArray(e, "team")}
        />
      </FormControl>
      <ul>{listItems}</ul>
    </form>
  );
};

export default FormProjects;
