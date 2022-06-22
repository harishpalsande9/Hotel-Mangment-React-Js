import React, { Component } from "react";
import { SortAlphaUp, SortAlphaDownAlt } from "react-bootstrap-icons";
class TableHeader extends React.Component {
  render() {
    const { columns, onSort, sortColumn } = this.props;

    const raiseSort = (path) => {
      let columnToSort = { ...sortColumn };
      if (columnToSort.path === path) {
        columnToSort.order = columnToSort.order === "asc" ? "desc" : "asc";
      } else {
        columnToSort.path = path;
        columnToSort.order = "asc";
      }
      onSort(columnToSort);
    };

    const renderSortIcon = (column) => {
      const { sortColumn } = this.props;

      if (column.path !== sortColumn.path) return null;
      if (sortColumn.order === "asc")
        return <SortAlphaUp className="mx-2 text-primary" />;
      return <SortAlphaDownAlt className="mx-2 text-success" />;
    };
    return (
      <thead className="border theadmargin has-background-link-light">
        <tr className="border-3">
          {columns.map((column) => (
            <th
              className={column.isText ? "text-start m-5" : "text-end m-5"}
              onClick={() => raiseSort(column.path)}
              key={column.path || column.label}
            >
              {column.label}

              {renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
