import React from "react";
import { useLocation } from "react-router-dom";
import { handlePageHeader } from "../../../utils/handlePageHeader";

function Header() {
  const { pathname } = useLocation();
  return (
    <div>
      <p>{handlePageHeader(pathname)}</p>
    </div>
  );
}

export default Header;
