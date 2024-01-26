import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileRegistration from "./Routes/ProfileRegistration/ProfileRegistration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfileRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
