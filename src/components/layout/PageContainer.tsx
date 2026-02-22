import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export const PageContainer = ({ children }: Props) => {
  return <Box sx={{ p: 4, maxWidth: 1200, margin: "0 auto" }}>{children}</Box>;
};
