import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

const SignInputs = ({ userName, setUserName, password, setPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <TextField
        label={"Nombre"}
        placeholder={"Nombre de usuario"}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        sx={{ margin: "2em 0" }}
        fullWidth
      />
      <TextField
        label={"Contraseña"}
        type={showPassword ? "text" : "password"}
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <VisibilityOffOutlined />
                ) : (
                  <VisibilityOutlined />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default SignInputs;
