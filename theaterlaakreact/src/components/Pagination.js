import React, { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export function PaginationComponent({
  succesdata,
  currentPage,
  setCurrentPage,
}) {
  const itemsPerPage = 5;
  const numberOfPages = Math.ceil(succesdata.length / itemsPerPage);

  const paginationButtons = [];
  for (let i = 1; i <= numberOfPages; i++) {
    paginationButtons.push(
      <PaginationItem key={i} active={i === currentPage}>
        <PaginationLink onClick={() => setCurrentPage(i)}>{i}</PaginationLink>
      </PaginationItem>
    );
  }

  return (
    <Pagination style={{ display: "flex", justifyContent: "center" }}>
      {paginationButtons}
    </Pagination>
  );
}

export default PaginationComponent;
