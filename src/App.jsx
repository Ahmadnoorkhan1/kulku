import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyReservations from "./pages/MyReservations";
import NewReservation from "./pages/NewReservation";
import ConfirmReservation from "./pages/ConfirmReservation";
import BookReservation from "./pages/BookReservation";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<MyReservations />} />
        <Route path="/new-reservation" element={<NewReservation />} />
        <Route path="/book-reservation" element={<BookReservation />} />
        <Route path="/confirm-reservation" element={<ConfirmReservation />} />
      </Routes>
    </>
  );
}

export default App;
