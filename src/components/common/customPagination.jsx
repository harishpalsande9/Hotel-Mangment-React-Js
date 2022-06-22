import React from "react";
import { Pagination } from "react-bootstrap";
import _ from "lodash";

const CustomPagination = ({
  onPageChange,
  itemsCount,
  pageSize,
  currentPage,
}) => {
  let active = currentPage;
  let items = [];
  for (let number = 1; number <= itemsCount; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => onPageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Pagination size="md" className="justify-content-center">
      {items}
    </Pagination>
  );
};

export default CustomPagination;
