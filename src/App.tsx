import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import WeddingUIPage from "./pages/WeddingUIPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/wedding-ui" element={<WeddingUIPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
