import { Box, Chip, Grid, Stack, Typography } from "@mui/material";

import type { Project } from "../data/projects";

type Props = {
  project: Project;
};

export const ProjectSummary = ({ project }: Props) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid size={{ xs: 12, md: 6 }}>
        <Stack spacing={2}>
          <Stack>
            <Typography variant="h2">{project.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {project.year}
            </Typography>
          </Stack>
          <Typography variant="body1">{project.description}</Typography>
          <Stack direction="row" spacing={1}>
            {project.tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" />
            ))}
          </Stack>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box>
          <img
            src={project.imgSrc}
            alt={project.name}
            width="100%"
            style={{ border: "1px solid lightgray", borderRadius: 4 }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
