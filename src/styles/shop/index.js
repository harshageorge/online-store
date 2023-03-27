
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const ShopBoxWrapper = styled(Box)(({ theme }) => ({
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    padding: "10px",
    justifyItems: "center",
    [theme.breakpoints.down(545)]: {
      gridTemplateColumns: "1fr",
      gap: "1rem",
    },
    [theme.breakpoints.between(545,915)]: {
      gridTemplateColumns: "1fr 1fr",
      gap: "1rem",
     
    },
    [theme.breakpoints.between(915,1025)]: {
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "1rem",
     
    },
 }));
