import React from "react";
import { Box, Modal } from "@mui/material";

type Props = {
  src: string;
  alt: string;
  children: React.ReactNode;
};

export const ImageLightbox = ({ src, alt, children }: Props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Box
        component="span"
        onClick={() => setOpen(true)}
        sx={{
          cursor: "zoom-in",
          display: "inline-block",
          "&:hover": { opacity: 0.9 },
        }}
      >
        {children}
      </Box>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            outline: "none",
            maxWidth: "90vw",
            maxHeight: "90vh",
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              maxWidth: "100%",
              maxHeight: "90vh",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Box>
      </Modal>
    </>
  );
};
