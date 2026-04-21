import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DestinationsPage from "./pages/DestinationsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<DestinationsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
