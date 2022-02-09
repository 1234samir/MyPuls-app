// import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PhoneModels from "./components/PhoneModels";
import { CreateAppointment } from "./components/CreateAppointment";
import { PhoneRepair } from "./components/PhoneRepair";
import DeviceColor from "./components/DeviceColor";
import OptionalMessage from "./components/OptionalMessage";
import SelectTime from "./components/SelectTime";
import TechnicianScore from "./components/TechnicianScore";
import EnterUserAddress from "./components/EnterUserAddress";
import EnterUserDetails from "./components/EnterUserDetails";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/products' element={<PhoneModels />} />
        <Route path='/appointment' element={<CreateAppointment />} />
        <Route path='/phonerepair' element={<PhoneRepair />} />
        <Route path='/color' element={<DeviceColor />} />
        <Route path='/message' element={<OptionalMessage />} />
        <Route path='/select-time' element={<SelectTime />} />
        <Route path='/technician-score' element={<TechnicianScore />} />
        <Route path='/enter-user-address' element={<EnterUserAddress />} />
        <Route path='/enter-user-details' element={<EnterUserDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

// json-server --watch db.json --port 5000
