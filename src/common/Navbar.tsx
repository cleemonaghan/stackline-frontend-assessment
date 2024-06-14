import { Box } from "@mui/material";
import { ReactComponent as Logo } from "./stackline_logo.svg";

const NAVY = "#052849";

const Navbar = () => (
  <nav>
    <Box
      sx={{
        backgroundColor: NAVY,
        width: "100%",
        height: "48px",
      }}
    >
      <Logo
        title="Stackline"
        style={{ height: 32, margin: 8, marginLeft: 32 }}
      />
    </Box>
  </nav>
);

export default Navbar;
