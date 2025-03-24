import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  handleLogin,
  handleForgotPassword,
}) => {
  return (
    <form className="flex flex-col gap-4" onSubmit={handleLogin}>
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

      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>

      <Typography variant="body2" className="mt-2 text-center">
        <Link href="#" onClick={handleForgotPassword}>
          Forgot password?
        </Link>
      </Typography>

      <Typography variant="body2" className="mt-2 text-center">
        Don&apos;t have an account? <Link href="/register">Register</Link>
      </Typography>
    </form>
  );
};

export default LoginForm;
