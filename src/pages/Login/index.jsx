import { Container, Box, Paper, FormControl, InputLabel, Input, Button, Link } from "@mui/material";
import { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de autenticación, como enviar los datos al servidor, validar las credenciales, etc.
    // Puedes utilizar librerías adicionales o hacer llamadas a la API según tus necesidades.
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <Container
    maxWidth
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage:'url(https://comimsa.net/wp-content/uploads/2022/10/4-Diseno-fondo-Tapiz-scaled.jpg)',
        backgroundPosition:'center',
        backgroundSize:'cover',
        objectFit:'contain',
        width:'100%',
        position:'fixed',
        margin:'0px',
      }}
    >
    
      <Paper
        sx={{ display: "flex", placeItems: "center", backgroundColor: "withe" , padding:'20px', flexDirection:'column'}}
        elevation={4}
      >
        <h3>Inicio de sesion</h3>
        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', padding:'10px', gap:'20px'}}>
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button fullWidth sx={{}} type="submit" variant="contained">
            Login
          </Button>
        </form>
        <Link href='#'>Recuperar contraseña</Link>
      </Paper>
    </Container>
  );
}

export { Login };
