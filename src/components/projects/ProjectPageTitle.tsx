import { Button, Stack, Typography } from "@mui/material";
import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import { Link } from "@tanstack/react-router";

type Props = {
  name: string;
};

export const ProjectPageTitle = ({ name }: Props) => {
  return (
    <Stack alignItems="center">
      <Link to="/">
        <Button startIcon={<ArrowBackIcon />} sx={{ textTransform: "none" }}>
          Back to Project List
        </Button>
      </Link>
      <Typography variant="h2">{name}</Typography>
    </Stack>
  );
};
