import React from "react";
import { Button, Card } from "react-bootstrap";
import _, { isInteger, isNumber } from "lodash";

const renderCell = (item, column) => {
  if (column.path) return _.get(item, column.path);
  return column.content(item.id);
};

const createKey = (item, column) => {
  return item.id + (column.path || column.key);
};

const createClass = (item, column) => {
  let classes = "";
  classes += isNaN(_.get(item, column.path)) ? "text-start" : "text-end";
  classes += column.status === "confirm" ? "text-success" : "";
  return classes;
};

const TableBody = ({
  columns,
  data,
  showExpandedRow,
  onExpandRow,
  expandedRow,
  showRowWiseData,
  expandedRowStatus,
}) => {
  // console.log(data[0]);
  return (
    <tbody>
      {data.map((item) => (
        <>
          <tr key={item.id}>
            {columns.map((column) => (
              <td
                className={createClass(item, column)}
                key={createKey(item, column)}
              >
                {renderCell(item, column)}
              </td>
            ))}
          </tr>
          {expandedRow === item && (
            <Card body className="slideIn">
              {item.companyDetails.companyName}
            </Card>
          )}
        </>
      ))}
    </tbody>
  );
};

export default TableBody;
