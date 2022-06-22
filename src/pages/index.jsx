import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Table,
  Button,
} from "react-bootstrap";

import TopHeader from "../components/navs/topHeader";
import { Trash, ArchiveFill, PencilSquare } from "react-bootstrap-icons";

import { state, useState } from "react";
import CustomPagination from "../components/common/customPagination";
import TableHeader from "../components/common/tableHeader";
import TableBody from "../components/common/tableBody";
import { paginate } from "../utils/paginate";
import _ from "lodash";

function IndexPage() {
  let [expandedRowStatus, setExpandedRowStatus] = useState(false);
  const [expandedRow, setExpandedRow] = useState("Naved");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [activeRow, setActiveRow] = useState("");
  const [sortColumn, setSortColumn] = useState({ path: "name", order: "asc" });
  const showExpandedRow = (product) => {
    expandedRowStatus && setExpandedRowStatus(false);
    !expandedRowStatus && setExpandedRowStatus(true);
  };

  let [filters, setFilters] = useState("");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleOnSort = (sortColumn) => {
    setSortColumn(sortColumn);
  };

  const [data, setData] = useState([
    {
      id: "1",
      name: "Anthony",
      address: "Bryan Avenue, Minneapolis, MN 55406",
      date: "07/07/2020",
      category: "local",
      order: "87574505851064",
    },
    {
      id: "2",
      name: "Michael",
      address: "Avenue, Minneapolis, MN 55406",
      date: "07/07/2020",
      category: "local",
      order: "87574505851064",
    },
    {
      id: "3",
      name: "Catty",
      address: "Minneapolis, MN 55406",
      date: "07/07/2020",
      category: "not local",
      order: "87574505851064",
    },
    {
      id: "4",
      name: "Elephent",
      address: "Minneapolis, MN 55406",
      date: "07/07/2020",
      category: "not local",
      order: "87574505851064",
    },
    {
      id: "5",
      name: "Joker",
      address: "796 55406",
      date: "07/07/2020",
      category: "local",
      order: "87574505851064",
    },
    {
      id: "6",
      name: "Md",
      address: " Avenue, Minneapolis, MN 55406",
      date: "07/07/2020",
      category: "sv local",
      order: "87574505851064",
    },
    {
      id: "7",
      name: "Naved",
      address: "796 Bryan Avenue, Minneapolis, MN 55406",
      date: "07/07/2020",
      category: "local",
      order: "87574505851064",
    },
    {
      id: "8",
      name: "Popat",
      address: "796 Bryan Avenue, Minneapolis, MN 55406",
      date: "07/07/2020",
      category: "local",
      order: "87574505851064",
    },
    {
      id: "9",
      name: "QWERTY",
      address: "796 Bryan Avenue, Minneapolis, MN 55406",
      date: "07/07/2020",
      category: "not local",
      order: "87574505851064",
    },
    {
      id: "10",
      name: "Yakk",
      address: "796 Bryan Avenue, Minneapolis, MN 55406",
      date: "07/07/2020",
      category: "not local",
      order: "87574505851064",
    },
    {
      id: "11",
      name: "Betta",
      address: "796 Bryan Avenue, Minneapolis, MN 55406",
      date: "07/07/2020",
      category: "local",
      order: "87574505851064",
    },
  ]);

  const handleDelete = (product) => {
    const newData = data.filter((m) => m.id !== product);
    setData(newData);
  };

  const showFull = (product) => {
    const obj = data.filter((m) => m.id === product);
    setExpandedRowStatus(true);
  };

  const columns = [
    { path: "id", label: "Id", isText: true },
    { path: "name", label: "Name", isText: true },
    { path: "address", label: "Address", isText: true },
    { path: "date", label: "Date", isText: false },
    { path: "category", label: "Category", isText: true },
    { path: "order", label: "Order", isText: false },
    {
      key: "delete",
      label: "Action",
      content: (product) => (
        <div class="field has-addons">
          <p class="control">
            <a
              className="mx-2 text-primary"
              onClick={() => showExpandedRow(product)}
            >
              <PencilSquare />
            </a>

            <a
              className="mx-2 text-danger"
              onClick={() => handleDelete(product)}
            >
              <Trash />
            </a>
          </p>
        </div>
      ),
    },
    ,
  ];

  //Filter

  const selectedFilter = filters;

  const filtered = selectedFilter
    ? data.filter((d) => d.category === selectedFilter)
    : data;
  //Sorting
  const sorted = _.orderBy(filtered, [sortColumn.path], sortColumn.order);
  //Paginated
  const paginateList = paginate(sorted, currentPage, pageSize);

  const selectFilter = (event) => {
    const newFilters = event.target.value;
    setFilters(newFilters);
    console.log(filters);
  };
  return (
    <>
      <TopHeader />

      <Container fluid>
        <Row className="mt-3">
          <Col lg={8}>
            <div className="mb-2 px-2">
              <Row>
                <Col>
                  <Button variant="info" size="sm">
                    New Reservation
                  </Button>
                </Col>
                <Col>
                  <Form>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder="Search Table"
                      />
                    </Form.Group>
                  </Form>
                </Col>
                <Col>
                  <Form.Select
                    size="sm"
                    aria-label="Default select example"
                    onChange={selectFilter}
                    name="category"
                  >
                    <option>Category</option>

                    <option value="local">Local</option>
                    <option value="not local">Not Local</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="mt-1">
                <div>
                  {filters && (
                    <Button className="mx-1" variant="light" size="sm">
                      {filters}
                    </Button>
                  )}
                </div>
              </Row>
            </div>

            {data.length > 0 ? (
              <>
                <Table
                  responsive="sm"
                  borderless
                  variant="light"
                  hover
                  size="sm"
                  className="px-2"
                >
                  <TableHeader
                    columns={columns}
                    onSort={handleOnSort}
                    sortColumn={sortColumn}
                  />
                  <TableBody
                    columns={columns}
                    data={paginateList}
                    expandedRowStatus={expandedRowStatus}
                    showExpandedRow={showExpandedRow}
                    rowStatus={expandedRowStatus}
                  />
                </Table>

                <CustomPagination
                  itemsCount={data.length / pageSize + 1}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <Card body border="light" className="border-2">
                It Seems You Have No Reservations!! Start Creating Now.
                <Button variant="info" size="sm" className="mx-2">
                  Create New Reservation
                </Button>
              </Card>
            )}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default IndexPage;
