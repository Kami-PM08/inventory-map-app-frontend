import React from "react";
import { Button, DialogActions } from "@mui/material";

const ButtonDialogAction = ({ close, onSubmit }) => {
  return (
    <DialogActions sx={{justifyContent: "center", mb: "1em"}} >
      <Button variant="contained" color="error" onClick={close}>
        Cancelar
      </Button>
      <Button variant="contained" color="success" onClick={onSubmit}>
        Confirmar
      </Button>
    </DialogActions>
  );
};

export default ButtonDialogAction;
