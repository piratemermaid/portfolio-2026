import { Box, Stack } from "@mui/material";

const maxNumber = 7;

export const Divider = () => {
  const dividerImages = Array.from({ length: maxNumber }, (_, index) => (
    <Box
      key={index}
      sx={{
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: "primary.light",
      }}
    />
  ));

  return (
    <Stack direction="row" spacing={1}>
      {dividerImages}
    </Stack>
  );
};
