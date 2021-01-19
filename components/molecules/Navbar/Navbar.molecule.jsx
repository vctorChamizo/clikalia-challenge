import React, { useState } from "react";
import { SCNavbar } from "./Navbar.styled";

export const Navbar = ({ optionList, action, withoutMenu = false }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  return (
    <SCNavbar>
      <div>
        <p>PETS LIST</p>
      </div>
    </SCNavbar>
  );
};
