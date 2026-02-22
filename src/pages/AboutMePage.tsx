import { Stack, Typography } from "@mui/material";

import { PageContainer } from "../components/layout/PageContainer";
import { bobaAndYukiImage, paraglidingImage } from "../images";

export const AboutMePage = () => {
  return (
    <PageContainer>
      <Stack spacing={8}>
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontFamily: "Domine, serif" }}
          >
            About Me
          </Typography>
          <Typography variant="body1">
            {`I'm a former graphic designer turned full-stack engineer. Outside of work,
            I partake in Colorado activities like climbing, skiing, and most recently, 
            paragliding. I have 2 indispensable coworkers, although they mostly sleep on the job.`}
          </Typography>
          <img src={paraglidingImage} alt="Paragliding" width="300px" />
          <img src={bobaAndYukiImage} alt="Boba and Yuki" width="300px" />
        </Stack>
      </Stack>
    </PageContainer>
  );
};
