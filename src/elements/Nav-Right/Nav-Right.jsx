import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";

const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>
];

export default function GroupSizesColors() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        "& > *": {
          m: 2
        }
      }}
    >
      <ButtonGroup size="large"  aria-label="large button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
