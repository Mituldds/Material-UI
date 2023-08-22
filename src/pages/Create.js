import { Button, ButtonGroup, Typography } from "@material-ui/core";
import React from "react";

const Create = () => {
  return (
    <>
      <Typography variant="h6" component="h2" textsecondary>
        Create a new Note
      </Typography>
      <Button type="submit"> Submit </Button>
      <Button type="submit" color="secondary" variant="outlined">
        {" "}
        Submit{" "}
      </Button>
      <Button type="submit"> Submit </Button>

      <ButtonGroup variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  );
};

export default Create;
