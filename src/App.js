import React, { useContext, useState, useEffect, useCallback } from "react";
import {
  Link,
  Route,
  Routes,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import RoomContext from "./contexts/roomContext";
import FrontDesk from "./pages/frontDesk/index";
import { useHotkeys } from "react-hotkeys-hook";

function App() {
  useHotkeys("ctrl+c", () => console.log("Key Combo Pressed"));

  return <FrontDesk />;
}

export default App;
