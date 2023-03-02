import React, { useContext, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import SignInputs from "./SignInputs";
import ButtonDialogAction from "./ButtonDialogAction";
import createUser from "../services/user/createUser";
import { UserContext } from "../context/user/UserProvider";

const AddUserDialog = ({ open, handleClose }) => {
  const {token} = useContext(UserContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const close = () => {
    setUserName("");
    setPassword("");
    handleClose();
  }

  const createOperator = async() => {
    try {
      const {user} = await createUser(token, {user_name: userName, password, rol: "OPERATOR"});
      alert("El operario " + user.user_name + " ha sido creado");
      close();
    } catch (error) {
      alert("Error al crear operario");
    }
  }

  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>Crear operario</DialogTitle>
      <DialogContent>
        <DialogContentText>Ingrese los datos del operario</DialogContentText>
        <SignInputs
          userName={userName}
          setUserName={setUserName}
          password={password}
          setPassword={setPassword}
        />
      </DialogContent>
      <ButtonDialogAction
        close={close}
        onSubmit={createOperator}
      />
    </Dialog>
  );
};

export default AddUserDialog;
