import { Button, FormControl, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../config/firebase";

const emptyProject = {
  title: "",
  domain: "",
  summary: "",
  team: [],
  tech: [],
  images: [],
  scripts: [],
  gist: "",
  url: "",
  folder: "",
};

const FormProjects = () => {
  const [projet, setProjet] = useState(emptyProject);
  const [teamate, setTeamate] = useState("");
  const [tech, setTech] = useState("");
  const [gist, setGist] = useState("");
  const [img, setImg] = useState({
    legend: "",
    fileName: "",
  });

  const handleChange = (value, prop) => {
    setProjet((currentState) => ({
      ...currentState,
      [prop]: value,
    }));
  };

  const handleImg = (value, prop) => {
    setImg((currentState) => ({
      ...currentState,
      [prop]: value,
    }));
  };

  const addToImgArray = () => {
    setProjet((currentState) => ({
      ...currentState,
      images: [...currentState.images, img],
    }));

    setImg({
      legend: "",
      fileName: "",
    });
  };

  const addToArray = (event) => {
    if (event.keyCode === 13 && valid(teamate)) {
      event.preventDefault();
      setProjet((currentState) => ({
        ...currentState,
        team: [...currentState.team, teamate],
      }));

      setTeamate("");
    }
  };

  const addToTechArray = (event) => {
    if (event.keyCode === 13 && valid(tech)) {
      event.preventDefault();
      setProjet((currentState) => ({
        ...currentState,
        tech: [...currentState.tech, tech],
      }));

      setTech("");
    }
  };

  const addToGistArray = (event) => {
    if (event.keyCode === 13 && valid(gist)) {
      event.preventDefault();
      setProjet((currentState) => ({
        ...currentState,
        scripts: [...currentState.scripts, gist],
      }));

      setGist("");
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

  const handleTech = (event) => {
    setTech(event.target.value);
  };

  const handleGist = (event) => {
    setGist(event.target.value);
  };

  const deleteName = (nom) => {
    projet.team.splice(projet.team.indexOf(nom), 1);

    setProjet((currentState) => ({
      ...currentState,
    }));
  };

  const deleteTech = (nom) => {
    projet.tech.splice(projet.tech.indexOf(nom), 1);

    setProjet((currentState) => ({
      ...currentState,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    saveProject();
  };

  const saveProject = async () => {
    await addDoc(collection(db, "projects"), projet);
  };

  const listItems = projet.team.map((nom, index) => (
    <li key={nom + index}>
      {nom}
      <DeleteForeverIcon onClick={() => deleteName(nom)} />
    </li>
  ));

  const listTechItems = projet.tech.map((nom, index) => (
    <li key={nom + index}>
      {nom}
      <DeleteForeverIcon onClick={() => deleteTech(nom)} />
    </li>
  ));

  const listGistItems = projet.scripts.map((item) => (
    <li key={item}>{item}</li>
  ));
  const listImgItems = projet.images.map(({ fileName, legend }) => (
    <li key={fileName}>
      {fileName} + {legend}
    </li>
  ));

  return (
    <Paper>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormControl>
          <TextField
            label="Titre"
            variant="standard"
            onChange={(e) => handleChange(e.target.value, "title")}
          />
          <TextField
            label="Domaine"
            variant="standard"
            onChange={(e) => handleChange(e.target.value, "domain")}
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
          <TextField
            label="Technologies"
            variant="standard"
            value={tech}
            onChange={handleTech}
            onKeyDown={(e) => addToTechArray(e, "tech")}
          />
          <FormControl>
            <TextField
              label="Gist"
              variant="standard"
              value={projet.gist}
              onChange={(e) => handleChange(e.target.value, "gist")}
            />
            <TextField
              label="FileName"
              variant="standard"
              value={gist}
              onChange={handleGist}
              onKeyDown={(e) => addToGistArray(e, "gist")}
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Img folder"
              variant="standard"
              value={projet.folder}
              onChange={(e) => handleChange(e.target.value, "folder")}
            />
            <TextField
              label="img fileName"
              variant="standard"
              value={img.fileName}
              onChange={(e) => handleImg(e.target.value, "fileName")}
            />
            <TextField
              label="img alt"
              variant="standard"
              value={img.legend}
              onChange={(e) => handleImg(e.target.value, "legend")}
            />
            <Button variant="contained" onClick={() => addToImgArray()}>
              Add image
            </Button>
          </FormControl>
          <Button variant="outlined" type="submit">
            Add project
          </Button>
        </FormControl>

        <ul>Teamates: {listItems}</ul>
        <ul>Technologies: {listTechItems}</ul>
        <ul>Gists: {listGistItems}</ul>
        <ul>Images: {listImgItems}</ul>
      </form>
    </Paper>
  );
};

export default FormProjects;
