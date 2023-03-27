import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const CartItemBoxWrapper = styled(Box)(({ theme }) => ({
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateAreas:'image title description',
    padding: "10px",
    justifyItems: "center",
    [theme.breakpoints.down(545)]: {
      gridTemplateColumns: "1fr",
      gap: "1rem",
    },

 }));
