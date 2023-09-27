import React from "react";
import SearchPanel from "../FormElements/SearchPanel";
import PrimaryBtn from "../FormElements/PrimaryBtn";
import { ReactComponent as PlusIcon } from "../../assets/icons/content.svg";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PagesIntro() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="page-header flex items-center justify-between mt-6">
      <SearchPanel className={"w-[250px] inline-block"} />
      <PrimaryBtn
        className="bg-primary text-white px-[50px]"
        handleClick={() => {
          navigate(`${pathname}/add`, {
            replace: true,
          });
        }}
      >
        <PlusIcon />
      </PrimaryBtn>
    </div>
  );
}

export default PagesIntro;
