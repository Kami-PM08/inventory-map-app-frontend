import { Button, Grid, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import SignInputs from "../components/SignInputs";
import { UserContext } from "../context/user/UserProvider";
import login from "../services/login";
import image from '../Assets/image.png'

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const onLogin = async () => {
    try {
      const token = await login({ user_name: userName, password });
      setUser(token);
    } catch (error) {
      console.log("Error al ingresar:", error);
    }
  };

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Grid
        item
        container
        xs={6}
        border={"solid #000"}
        borderRadius={5}
        minHeight={"60vh"}
        alignItems={"center"}
        boxShadow={"11px 18px 56px -1px rgba(0,0,0,0.33)"}
      >
        <Grid item xs={7} width={"100%"} height={"60vh"} >
          <img src={image} width={"100%"} height={"100%"} style={{borderTopLeftRadius: 15, borderBottomLeftRadius: 15}} />
        </Grid>
        <Grid
          item
          xs={5}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          p={2}
        >
          <Typography
            variant={"h3"}
            textAlign={"center"}
            color={"#a3a3a3"}

          >
            Inicia sesión
          </Typography>
          <SignInputs
            userName={userName}
            setUserName={setUserName}
            password={password}
            setPassword={setPassword}
          />
          <Button
            onClick={onLogin}
            color="success"
            variant="contained"
            sx={{ marginBlock: "2em", width: "10vw", paddingBlock: "1em" }}
          >
            Ingresar
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
