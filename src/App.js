import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"
import Diary from "./pages/Diary";
import FrontPage from "./pages/FrontPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";
import Signup from "./pages/Signup";
import PrivateRoutes from "./utils/PrivateRoutes";
import PublicRoutes from "./utils/PublicRoutes";


const App = () =>  {
  return (
    <Router>

      <Routes>
        <Route element={<PublicRoutes/>} >
          <Route path="/" element={<FrontPage />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
        </Route>

        <Route element={<PrivateRoutes/>}>
          <Route path="/home" element={<Home />} />
          <Route path="/home/diaries/:date" element={<Diary />} />
        </Route>

        <Route path='*' element={<NotFoundPage/>} />

      </Routes>

      {/* <div>
        {pages.map(page => 
          <h1>
            {page.content}
          </h1>)}
      </div> */}
    </Router>
  );
}

export default App;
