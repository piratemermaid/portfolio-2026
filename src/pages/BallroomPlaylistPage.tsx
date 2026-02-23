import { Stack, Typography } from "@mui/material";

import { Divider } from "../components/Divider";
import { ImageLightbox } from "../components/ImageLightbox";
import { PageContainer } from "../components/layout/PageContainer";
import { ProjectPageTitle } from "../components/projects/ProjectPageTitle";
import { InProgressIcon } from "../components/common/InProgressIcon";
import {
  ballroomColorsImage,
  ballroomTypographyImage,
  ballroomComponentImage,
} from "../images";

export const BallroomPlaylistPage = () => {
  return (
    <PageContainer>
      <Stack spacing={8} alignItems="center">
        <Stack alignItems="center">
          <ProjectPageTitle name="Ballroom Playlist" />
          <Stack
            direction="row"
            spacing={1}
            sx={{
              backgroundColor: "primary.light",
              color: "white",
              p: 1,
              borderRadius: 1,
            }}
          >
            <InProgressIcon />
            <Typography variant="body1" color="white">
              Project and Portfolio Page both In Progress!
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems="center" sx={{ maxWidth: 800 }}>
          <Typography variant="h4">The Grand Idea</Typography>
          <Typography variant="body1">
            As a ballroom dance student, I've found it frustrating that part of
            my valuable lesson time is spent finding the right music. My
            teachers have a playlist for every genre, within which they need to
            remember the speeds and moods of each song or else they'll have to
            play several song beginnings before they find an appropriate one.
          </Typography>
          <Typography variant="body1">
            Enter my ballroom playlist app! It will allow teachers to import all
            of their music into one playlist, which can be filtered down by
            dance type and BPM to reduce dead time in (expensive) lessons. Users
            authenticate with their Spotify accounts, which I chose because it's
            the main music streaming service that ballroom studios use and the
            API is easily accessible.
          </Typography>
        </Stack>
        <Divider />
        <Stack spacing={2} alignItems="center" sx={{ maxWidth: 800 }}>
          <Typography variant="h4">Design System</Typography>
          <Typography variant="body1">
            I designed the color palette to be balanced between being serious
            and approachable. I want the user to feel like it is professional,
            but also fun. I chose this primary blue because it's a little
            generic (at least to me, since it's close to the default primary
            color of MUI). This lends to the professional aspect as well as blue
            giving off trustworthy vibes. The pink-ish purple-ish secondary
            color adds some playfulness. Similarly with the typography, the
            Playfair Display serif font is more serious and the DM Sans body
            font is more casual and playful with its roundness.
          </Typography>
          <Stack direction="row" spacing={2}>
            <ImageLightbox src={ballroomColorsImage} alt="Ballroom Colors">
              <img
                src={ballroomColorsImage}
                alt="Ballroom Colors"
                style={{ maxWidth: "300px" }}
              />
            </ImageLightbox>
            <ImageLightbox
              src={ballroomTypographyImage}
              alt="Ballroom Typography"
            >
              <img
                src={ballroomTypographyImage}
                alt="Ballroom Typography"
                style={{ maxWidth: "300px" }}
              />
            </ImageLightbox>
          </Stack>
        </Stack>
        <Divider />
        <Stack spacing={2} alignItems="center" sx={{ maxWidth: 800 }}>
          <Typography variant="h4">Components & Design</Typography>
          <Typography variant="body1">
            Potential users are likely not the early adopter type and
            potentially not tech-savvy at all, so I needed to make the design
            extremely intuitive and easy to use. Here are some of the components
            I designed in Figma, using Material UI components as a base.
          </Typography>
          <ImageLightbox src={ballroomComponentImage} alt="Ballroom Components">
            <img
              src={ballroomComponentImage}
              alt="Ballroom Components"
              style={{ maxWidth: "800px" }}
            />
          </ImageLightbox>
        </Stack>
      </Stack>
    </PageContainer>
  );
};
