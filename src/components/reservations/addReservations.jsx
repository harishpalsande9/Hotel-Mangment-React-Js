import React, { useState } from "react";
import {
  Container,
  Row,
  ListGroup,
  Col,
  Tabs,
  Tab,
  Card,
  Form,
  InputGroup,
  FormControl,
  Table,
  Button,
} from "react-bootstrap";
import { PersonPlusFill, PlusCircleDotted } from "react-bootstrap-icons";
const AddReservationForm = ({
  displayCompanyForm,
  companyFormStatus,
  displayReservationForm,
  handleChange,
  addFormFields,
  removeFormFields,
  addReservation,
  roomInfo,
  formValues,
  formData,
}) => {
  const [showCompany, setShowCompany] = useState(false);
  return (
    <>
      {roomInfo ? (
        <Form onSubmit={addReservation}>
          <div className=" row border-light border-bottom ">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <h5 className="">
                    New Reservation For Room
                    <strong className="text-primary">
                      &nbsp; {roomInfo.roomNumber}
                    </strong>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="From Date"
                  />
                </div>
                <div className="col-md-6">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="To Date"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <hr className="hr-1" /> */}

          <div className="my-2">
            <span className=" text-primary">Company</span>
            <label class="switch mx-2">
              <input type="checkbox" onChange={() => displayCompanyForm()} />
              <span class="slider"></span>
            </label>
          </div>

          {companyFormStatus && (
            <div className="slideIn">
              <div className="row">
                <div className="col-md-6">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Company Name"
                    name="companyDetails.companyName"
                    onChange={handleChange}
                    id="companyId"
                    value={formData.companyName}
                  />
                </div>
                <div className="col-md-6">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="GST Number"
                    name="companyDetails.gst"
                    onChange={handleChange}
                    id="gstId"
                    value={formData.gst}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Mobile"
                  />
                </div>

                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Email"
                  />
                </div>

                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Point Of Contact"
                  />
                </div>

                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Guest Type"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Total Credit Given"
                      aria-label="Username"
                      className="form-control form-control-sm my-2"
                      aria-describedby="basic-addon1"
                      disabled
                    />
                    <InputGroup.Text className="bg-light" id="basic-addon1">
                      <PlusCircleDotted className="text-primary" />
                    </InputGroup.Text>
                  </InputGroup>
                </div>

                <div className="col-md-4">
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Remaining Credit"
                      aria-label="Username"
                      className="form-control form-control-sm my-2"
                      aria-describedby="basic-addon1"
                      disabled
                      size="sm"
                    />
                    <Button variant="light" size="sm">
                      BTC
                    </Button>
                  </InputGroup>
                </div>

                <div className="col-md-4 my-2">
                  <Form.Check
                    type="switch"
                    id="custom-switch-gst"
                    label="Another Company Claiming GST?"
                  />
                </div>
              </div>
            </div>
          )}
          <hr className="hr-1" />

          {formValues.map((element, index) => (
            <>
              <div className="row">
                <h5>New Guest </h5>
                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Title"
                  />
                </div>

                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="First Name"
                  />
                </div>

                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Middle Name"
                  />
                </div>

                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Mobile"
                  />
                </div>

                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Email"
                  />
                </div>

                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Point Of Contact"
                  />
                </div>

                <div className="col-md-3">
                  {index ? (
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeFormFields(index)}
                    >
                      Remove This Guest
                    </Button>
                  ) : null}
                </div>
              </div>
            </>
          ))}

          <div className="row">
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Source"
              />
            </div>

            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Reservation By"
              />
            </div>

            <div className="col-md-3">
              <input
                class="form-control form-control-sm my-2"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Guest Type"
              />
              <datalist id="datalistOptions">
                <option value="Couple" />
                <option value="Corporate" />
                <option value="Family" />
              </datalist>
            </div>

            <div className="col-md-3">
              <input
                class="form-control form-control-sm my-2"
                list="datalistOptions1"
                id="exampleDataList"
                placeholder="Purpose Of Visit"
              />
              <datalist id="datalistOptions1">
                <option value="Trip" />
                <option value="Marriage" />
                <option value="Etc" />
              </datalist>
            </div>

            <div className="col-md-3 my-2">
              <Button size="sm" variant="light" onClick={() => addFormFields()}>
                Add More Guests
              </Button>
            </div>
          </div>

          <hr className="hr-1" />

          <div className="row">
            <h5>Room Details</h5>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="No Of People"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Room Type"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="No Of Rooms"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Meal Plan"
              />
            </div>
          </div>

          <hr className="hr-1" />

          <div className="row">
            <h5>Charges</h5>

            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Base Amount"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Tax"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Discount"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Net Amount"
              />
            </div>
            <div className="col-md-3">
              <Button size="sm" variant="light">
                remark
              </Button>
            </div>
          </div>

          <hr className="hr-1" />

          <div className="row">
            <h5>Payments</h5>
            <div className="col-md-2">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Total Payable"
              />
            </div>

            <div className="col-md-2">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Advance"
              />
            </div>

            <div className="col-md-2">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Pending"
              />
            </div>

            <div className="col-md-2">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Payment Mode"
              />
            </div>

            <div className="col-md-2 my-2">
              <Button variant="light" size="sm">
                Bill To Company
              </Button>
            </div>

            <div className="col-md-2 my-2">
              <Button variant="dark" size="sm" type="submit">
                Make Reservation
              </Button>
            </div>
          </div>

          <hr className="hr-1" />
        </Form>
      ) : (
        <Form onSubmit={addReservation}>
          <div className=" row border-light border-bottom mb-2 pb-3">
            <div className="col-md-4  mb-2">
              <h5 className="bg-light mb-2">New Reservation</h5>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6 mb-2">
                  <Form.Control
                    className="form-control-sm "
                    placeholder="From Date"
                  />
                </div>
                <div className="col-md-6">
                  <Form.Control
                    className="form-control-sm"
                    placeholder="To Date"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <hr className="hr-1" /> */}

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Check
              onChange={() => displayCompanyForm()}
              type="switch"
              id="custom-switch"
              className="text-primary"
              label="Billing For Company ?"
            />
          </Form.Group>

          {companyFormStatus && (
            <div className="slideIn">
              <div className=" row  ">
                <div className="col-md-6">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Company Name"
                    name="companyDetails.companyName"
                    onChange={handleChange}
                    id="companyId"
                    value={formData.companyName}
                  />
                </div>
                <div className="col-md-6">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="GST Number"
                    name="companyDetails.gst"
                    onChange={handleChange}
                    id="gstId"
                    value={formData.gst}
                  />
                </div>
              </div>

              <div className=" row ">
                <div className="col-md-3 ">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Mobile"
                  />
                </div>
                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Email"
                  />
                </div>

                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Point Of Contact"
                  />
                </div>
                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Guest Type"
                  />
                </div>
              </div>
              <div className="row ">
                <div className="col-md-4">
                  <InputGroup className="my-2">
                    <FormControl
                      placeholder="Total Credit Given"
                      aria-label="Username"
                      className="form-control form-control-sm "
                      aria-describedby="basic-addon1"
                      disabled
                    />
                    <InputGroup.Text className="bg-light" id="basic-addon1">
                      <PlusCircleDotted className="text-primary" />
                    </InputGroup.Text>
                  </InputGroup>
                </div>
                <div className="col-md-4">
                  <InputGroup className="my-2">
                    <FormControl
                      placeholder="Remaining Credit"
                      aria-label="Username"
                      className="form-control form-control-sm"
                      aria-describedby="basic-addon1"
                      disabled
                      size="sm"
                    />
                    <Button variant="light" size="sm">
                      BTC
                    </Button>
                  </InputGroup>
                </div>
                <div className="col-md-4 ">
                  <Form.Check
                    type="switch"
                    id="custom-switch-gst"
                    label="Another Company Claiming GST?"
                  />
                </div>
              </div>
            </div>
          )}

          {formValues.map((element, index) => (
            <>
              <div className=" row mt-2">
                <h5>New Guest </h5>
                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Title"
                  />
                </div>
                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Middle Name"
                  />
                </div>
                <div className="col-md-3">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="row ">
                <div className="col-md-3 ">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Mobile"
                  />
                </div>
                <div className="col-md-3 ">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-3 ">
                  <Form.Control
                    className="form-control-sm my-2"
                    placeholder="Point Of Contact"
                  />
                </div>
                <div className="col-md-3 my-2">
                  {index ? (
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeFormFields(index)}
                    >
                      Remove This Guest
                    </Button>
                  ) : null}
                </div>
              </div>
            </>
          ))}

          <div className=" row ">
            <div className=" col-md-2 ">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Source"
              />
            </div>
            <div className=" col-md-2 ">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Reservation By"
              />
            </div>
            <div className=" col-md-3 ">
              <input
                class="form-control form-control-sm my-2"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Guest Type"
              />
              <datalist id="datalistOptions">
                <option value="Couple" />
                <option value="Corporate" />
                <option value="Family" />
              </datalist>
            </div>
            <div className=" col-md-3 ">
              <input
                class="form-control form-control-sm my-2"
                list="datalistOptions1"
                id="exampleDataList"
                placeholder="Purpose Of Visit"
              />
              <datalist id="datalistOptions1">
                <option value="Trip" />
                <option value="Marriage" />
                <option value="Etc" />
              </datalist>
            </div>
            <div className="col-md-2 float-right my-2">
              <Button size="sm" variant="light" onClick={() => addFormFields()}>
                Add More Guests
              </Button>
            </div>
          </div>

          <hr className="hr-1" />

          <div className=" row mt-3 mb-3">
            <h5>Room Details</h5>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="No Of People"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Room Type"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="No Of Rooms"
              />
            </div>
            <div className="col-md-3">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Meal Plan"
              />
            </div>
          </div>

          <hr className="hr-1" />

          <div className="row ">
            <h5>Charges</h5>
            <div className="text-start col-md-4">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Remarks ?"
              />
            </div>
            <div className="col-md-4 ">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Base Amount"
              />
            </div>
            <div className="col-md-4">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Tax"
              />
            </div>
            <div className="col-md-4">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Discount"
              />
            </div>
            <div className="col-md-4">
              <Form.Control
                className="form-control-sm my-2"
                placeholder="Net Amount"
              />
            </div>
          </div>

          <hr className="hr-1" />

          <div className=" row mt-3 mb-3">
            <div className="row mb-3">
              <div className="col-md-6">
                <h5>Payments </h5>
              </div>
              <div className="col-md-6">
                <span>
                  <Form.Check
                    type="switch"
                    className="float-end"
                    id="custom-switch"
                    label="Bill To Company"
                  />
                </span>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-4 ">
                <Form.Control
                  className="form-control-sm my-2"
                  placeholder="Total Payable"
                />
              </div>
              <div className="col-md-4 ">
                <Form.Control
                  className="form-control-sm my-2"
                  placeholder="Advance"
                />
              </div>
              <div className="col-md-4 ">
                <Form.Control
                  className="form-control-sm my-2"
                  placeholder="Pending"
                />
              </div>

              <div className="col-md-4 ">
                <Form.Control
                  className="form-control-sm my-2"
                  placeholder="Payment Mode"
                />
              </div>
              <div className=" col-md-4  my-2">
                <Button className="" variant="dark" size="sm" type="submit">
                  Reserve Room
                </Button>
              </div>
            </div>
          </div>

          <hr className="hr-1" />
        </Form>
      )}
    </>
  );
};

export default AddReservationForm;
