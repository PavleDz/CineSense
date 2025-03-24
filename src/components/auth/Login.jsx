import { useState } from "react";
import { TextField, Button, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AuthForm from "./AuthForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", email, password);
    // login logic
  };

  return (
    <AuthForm title="Sign in to your account" onSubmit={handleSubmit}>
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        type={showPassword ? "text" : "password"}
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="mt-4"
      >
        Login
      </Button>
    </AuthForm>
  );
};

export default Login;
