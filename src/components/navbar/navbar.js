import {
  AppBar,
  Button,
  styled,
  Toolbar,
  Typography,
  Badge,
} from "@mui/material";
import React, { useContext } from "react";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const StyledToolbar = styled(Toolbar)({
  backgroundColor: "#291715",
  display: "flex",
  justifyContent: "space-between",
  height: "65px",
});
const StyledButton = styled(Button)({
  color: "white",
  display: "flex",
  gap: "1rem",
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgb(19, 19, 19)",
  "&:hover": {
    backgroundColor: "rgb(41, 4, 4)",
  },
  width: "50%",
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "visible",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",

    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
export const Navbar = () => {
  const navigate = useNavigate();
  const { getTotalCartItem, search, setSearch } = useContext(ShopContext);

  return (
    <AppBar position="static">
      <StyledToolbar>
        <StyledButton onClick={() => navigate("/")}>
          <StoreIcon
            sx={{ display: { xs: "block" } }}
            style={{ fontSize: 35 }}
          />
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            My Shop
          </Typography>
        </StyledButton>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </Search>
        <StyledButton onClick={() => navigate("/cart")}>
          <Badge badgeContent={getTotalCartItem()} color="secondary">
            <ShoppingCartIcon color="white" style={{ fontSize: 35 }} />
          </Badge>
        </StyledButton>
      </StyledToolbar>
    </AppBar>
  );
};
