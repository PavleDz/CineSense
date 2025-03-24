import { Paper, Typography } from "@mui/material";

const AuthForm = ({ title, children, onSubmit }) => {
  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <Paper elevation={4} className="p-8 w-full max-w-md">
        <Typography variant="h5" className="mb-6 text-center font-bold">
          {title}
        </Typography>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          {children}
        </form>
      </Paper>
    </div>
  );
};

export default AuthForm;
