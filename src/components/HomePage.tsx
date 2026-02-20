import { Stack } from "@mui/material";

import { WelcomeBanner } from "./layout/WelcomeBanner";
import { ProjectSummary } from "./ProjectSummary";
import { projectSummaries } from "../data/projects";
import { Divider } from "./Divider";

export const HomePage = () => {
  return (
    <Stack
      spacing={8}
      sx={{ p: 4, maxWidth: 1200, margin: "0 auto", alignItems: "center" }}
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
