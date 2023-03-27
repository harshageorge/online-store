import {styled, Toolbar} from "@mui/material";
import React from "react";
export const Footer = () => {
  const StyledToolbar = styled(Toolbar)({
    backgroundColor: "#291715",
    marginTop:'auto',
    color:'white',
    display: "flex",
    justifyContent: "center",
  });
  return (
<StyledToolbar onClick={() =>document.body.scrollIntoView()}>
Back to top
</StyledToolbar>
  );
};
