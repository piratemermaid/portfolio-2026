import { Box, Typography } from "@mui/material";

export const WelcomeBanner = () => {
  return (
    <Box sx={{ p: 4, borderRadius: 2, textAlign: "center" }}>
      <Typography variant="h1">The Pirate Mermaid</Typography>
      <Typography variant="h4" color="text.secondary">
        Developer & Designer
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        {`I've combined my love for coding and design to create beautiful and functional 
        web applications.`}
      </Typography>
    </Box>
  );
};
