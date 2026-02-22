import { Stack } from "@mui/material";

import { WelcomeBanner } from "../components/layout/WelcomeBanner";
import { ProjectSummary } from "../components/ProjectSummary";
import { Divider } from "../components/Divider";
import { projectSummaries } from "../data/projects";

export const HomePage = () => {
  return (
    <Stack
      spacing={8}
      sx={{
        p: 4,
        maxWidth: 1200,
        margin: "0 auto",
        alignItems: "center",
        mb: 16,
      }}
    >
      <WelcomeBanner />
      <Stack spacing={16} alignItems="center">
        <Divider />
        {projectSummaries.map((project, index) => (
          <>
            <ProjectSummary key={project.name} project={project} />
            {index < projectSummaries.length - 1 && <Divider />}
          </>
        ))}
      </Stack>
    </Stack>
  );
};
