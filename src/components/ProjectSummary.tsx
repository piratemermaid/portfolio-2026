import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import {
  OpenInNew as DemoIcon,
  ChevronRight as ProjectIcon,
} from "@mui/icons-material";
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
            <Typography variant="h2" sx={{ fontFamily: "Domine, serif" }}>
              {project.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontFamily: "Domine, serif" }}
            >
              {project.year}
            </Typography>
          </Stack>
          <Typography variant="body1">{project.description}</Typography>
          {project.demoUrl && (
            <Button
              variant="contained"
              color="primary"
              href={project.demoUrl}
              target="_blank"
              sx={{
                width: "fit-content",
                textTransform: "none",
                borderRadius: 8,
              }}
              endIcon={<DemoIcon sx={{ ml: -0.5 }} />}
            >
              View It Live
            </Button>
          )}
          {project.url ? (
            <Button
              variant="contained"
              color="primary"
              href={project.url}
              sx={{
                width: "fit-content",
                textTransform: "none",
                borderRadius: 8,
              }}
              endIcon={<ProjectIcon sx={{ ml: -0.5 }} />}
            >
              View Project
            </Button>
          ) : (
            <Typography variant="body2" color="text.secondary">
              More info available upon request
            </Typography>
          )}
          <Stack direction="row" spacing={1}>
            {project.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{ backgroundColor: "neutral.dark" }}
              />
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
