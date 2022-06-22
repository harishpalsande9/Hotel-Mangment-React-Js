import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import LoginPage from "./pages/auth/loginPage";

import "./customScss.scss";
import "./customCss.css";
import App from "./App";
import RegisterPage from "./pages/auth/registerPage";
import RegisterBusinessPage from "./pages/auth/registerBusinessPage";
import ReservationsPage from "./pages/frontDesk/reservationsPage";
import IndexPage from "./pages/frontDesk/index";

import CheckInPage from "./pages/frontDesk/checkInPage";
import Transactions from "./pages/transactions";
import PostingsPage from "./pages/transactions/postingsPage";
import AdvancePage from "./pages/transactions/advancePage";
import UpdateRooms from "./pages/transactions/updateRooms";
import ConfigPage from "./pages/configPage";
import BillSettle from "./pages/transactions/billSettle";
import CheckOutPage from "./pages/frontDesk/checkOutPage";
import AddReservation from "./pages/frontDesk/addReservation";
import HouseKeepingIndex from "./pages/hk";
import LostFound from "./pages/hk/lostFound";
import Linen from "./pages/hk/linen";
import Laundry from "./pages/hk/laundry";
import MiniBar from "./pages/hk/miniBar";
import Breakages from "./pages/hk/breakages";
import Amenities from "./pages/hk/amenities";
import CRMIndex from "./pages/crm";
import LeadsPage from "./pages/crm/leadsPage";
import CustomersPage from "./pages/crm/customersPage";
import AgentsPage from "./pages/crm/agentsPage";
import MastersIndex from "./pages/masters/mastersIndex";
import RoomsMaster from "./pages/masters/roomsMaster";
import IdMaster from "./pages/masters/idMaster";
import StaffMaster from "./pages/masters/staffMaster";
import UserProfile from "./pages/userProfile/userProfile";
import IndexReport from "./pages/reports/indexReport";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/masters" element={<ConfigPage />} /> */}
        <Route path="/register-business" element={<RegisterBusinessPage />} />
        <Route path="/front-desk" element={<IndexPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />

        <Route path="/user" element={<UserProfile />} />

        <Route path="/reports" element={<IndexReport />} />

        <Route path="/masters" element={<MastersIndex />} />
        <Route path="/rooms" element={<RoomsMaster />} />
        <Route path="/ids" element={<IdMaster />} />
        <Route path="/staff" element={<StaffMaster />} />

        <Route path="/house-keeping" element={<HouseKeepingIndex />} />
        <Route path="/lost-found" element={<LostFound />} />
        <Route path="/linen" element={<Linen />} />
        <Route path="/laundry" element={<Laundry />} />
        <Route path="/minibar" element={<MiniBar />} />
        <Route path="/breakages" element={<Breakages />} />
        <Route path="/aminities" element={<Amenities />} />

        <Route path="/crm" element={<CRMIndex />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/leads" element={<LeadsPage />} />
        <Route path="/agents" element={<AgentsPage />} />

        <Route path="/checkin" element={<CheckInPage />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/postings" element={<PostingsPage />} />
        <Route path="/advances" element={<AdvancePage />} />
        <Route path="/update-rooms" element={<UpdateRooms />} />
        <Route path="/settle-bills" element={<BillSettle />} />
        <Route path="/checkout" element={<CheckOutPage />} />

        {/*<Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/register" element={<RegisterBasic />} />
        <Route path="/register-business" element={<RegisterAdv />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/laundry" element={<LaundryPage />} />
        <Route path="/house-keeping" element={<HouseKeepingPage />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
