import FrontOfficeNavbar from "../../components/navs/frontOfficeNavbar";
import TopHeader from "../../components/navs/topHeader";
import AddReservationForm from "../../components/reservations/addReservations";
const AddReservation = ({
  displayCompanyForm,
  addReservation,
  companyFormStatus,
  formData,
  handleChange,
  addFormFields,
  formValues,
  expandedRowStatus,
  removeFormFields,
  roomInfo,
  reservationFields,
}) => {
  return (
    <>
      <TopHeader />
      <FrontOfficeNavbar />
      <AddReservationForm
        displayCompanyForm={displayCompanyForm}
        addReservation={addReservation}
        roomInfo={roomInfo}
        companyFormStatus={companyFormStatus}
        formData={reservationFields}
        handleChange={handleChange}
        addFormFields={addFormFields}
        removeFormFields={removeFormFields}
        formValues={formValues}
        expandedRowStatus={expandedRowStatus}
      />
    </>
  );
};

export default AddReservation;
