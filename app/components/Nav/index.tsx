import { Inline } from "../Inline";
import { Brand, MenuItem } from "./index.styles";

export const Nav = () => {
  return (
    <nav>
      <Inline distribute="space-between" paddingInline="16px">
        <Brand>
          ES <br /> PR
        </Brand>
        <Inline>
          <MenuItem to="/story">Story</MenuItem>
          <MenuItem to="/story">Menu</MenuItem>
        </Inline>
      </Inline>
    </nav>
  );
};
