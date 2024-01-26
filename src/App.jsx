import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileRegistration from "./Routes/ProfileRegistration/ProfileRegistration";
// import ProfileDetail from "./Routes/ProfileDetail/ProfileDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfileRegistration />} />
        {/* <Route path="/profile" element={<ProfileDetail />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
