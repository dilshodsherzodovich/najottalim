import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Clients from "../../pages/Home/components/Clients";

// images & icons
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const PaginatedItemsClients = ({ data, itemsPerPage }) => {
  const items = data;

  function Items({ design }) {
    return <>{design}</>;
  }

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items
        currentItems={currentItems}
        design={<Clients clientsInfo={currentItems} />}
      />
      <div className="flex justify-between mt-[43px] w-[95%] mx-auto">
        <p>
          1-{currentItems.length}{" "}
          <span className="ml-[15px]">{data.length} ta</span>
        </p>
        <ReactPaginate
          containerClassName="flex justify-center items-center gap-5 pagination"
          pageLinkClassName="border border-solid border-primary  text-textGrey px-[20px] py-[10px] rounded-full page-num"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={
            <AiFillCaretLeft className="text-[32px] text-textGrey" />
          }
          nextLabel={<AiFillCaretRight className="text-[32px] text-textGrey" />}
          renderOnZeroPageCount={null}
          activeClassName="py-[10px] rounded-full bg-primary text-white active"
        />
      </div>
    </>
  );
};

export default PaginatedItemsClients;
