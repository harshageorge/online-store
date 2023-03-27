import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
export const CounterButton = styled(Button)(({ show, theme }) => ({
    maxWidth: "20px",
    maxHeight: "20px",
    minWidth: "20px",
    minHeight: "20px",
    fontSize: "12px",
    background: "#291715",
    opacity: 0.9,
    ":hover": {
      background: "#c26b61",
    },
  }));
