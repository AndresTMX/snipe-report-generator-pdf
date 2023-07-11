import "../../index.css";
import {
  Container,
  Box,
  Paper,
  FormControl,
  InputLabel,
  Input,
  Button,
  Link,
  IconButton,
} from "@mui/material";
import { Notification } from "../../modals/notification.jsx";
import { useAuth } from "../../Context/AuthContext.jsx";
import { DocContext } from "../../Context/DocContext.jsx";
import { actionTypes as actionTypesModals } from "../../Context/StatesModalsReducer.js";
import { useState, useContext } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

function Login() {
  const auth = useAuth();
  const [state, dispatch] = useContext(DocContext);
  const { StatesModals } = state ? state : {};
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState(true);
  const icon = view ? <AiFillEyeInvisible /> : <AiFillEye />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await auth.login({ email, password });
    } catch (error) {
      dispatch({
        type: actionTypesModals.setModalNotification,
        payload: "correo o contraseña incorrectos",
      });
      console.log(error)
    }
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      const reset = await auth.resetPass({ email });
      dispatch({
        type: actionTypesModals.setModalNotification,
        payload: `Correo de recuperacion enviado a ${email}`,
      });
    } catch (error) {
      dispatch({
        type: actionTypesModals.setModalNotification,
        payload: "correo incorrecto",
      });
    }
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setView(!view);
  };

  const handleViewPass = () => {
    setView(!view);
  };

  return (
    <Container
      maxWidth='xxl'
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage:
          "url(https://comimsa.net/wp-content/uploads/2022/10/4-Diseno-fondo-Tapiz-scaled.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        position: "fixed",
        margin: "0px",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          placeItems: "center",
          backgroundColor: "withe",
          padding: "20px",
          flexDirection: "column",
          width: "350px",
        }}
        elevation={4}
      >
        <h3>Inicio de sesion</h3>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            gap: "20px",
            width: "100%",
          }}
        >
          <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type={view ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <IconButton
              onClick={handleViewPass}
              sx={{
                display: "flex",
                position: "absolute",
                bottom: "20%",
                left: "85%",
                "& : hover": { cursor: "pointer" },
              }}
            >
              {icon}
            </IconButton>
          </FormControl>
          <Button fullWidth sx={{}} type="submit" variant="contained">
            Login
          </Button>
        </form>
        <Link onClick={resetPassword} href="#">
          Recuperar contraseña
        </Link>
      </Paper>

      {StatesModals.modalNotification && (
        <Notification>
          <Paper
            elevation={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              gap: "20px",
            }}
          >
            <p className="span">{StatesModals.modalNotification}</p>
            <Button
              onClick={() =>
                dispatch({
                  type: actionTypesModals.setModalNotification,
                  payload: false,
                })
              }
            >
              Ok
            </Button>
          </Paper>
        </Notification>
      )}
    </Container>
  );
}

export { Login };
