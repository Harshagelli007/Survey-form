import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Componants/Authentication/Login";
import Signup from "./Componants/Authentication/Signup";
import Homepage from "./Componants/Home/Homepage";
import SurveyList from "./Componants/SurveyList/SurveyList";
function App() {
  // return<>
  // <SurveyList/>
  // </>
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/home" element={<Homepage />} /> */}
        <Route path="/home" element={<SurveyList />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
