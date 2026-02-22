import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export const PageContainer = ({ children }: Props) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};
