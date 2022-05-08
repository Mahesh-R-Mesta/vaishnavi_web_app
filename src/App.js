import "./App.css";
import LoginScreen from "./component/login";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import AdminScreen from "./component/admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Navigate to="/login" replace={true} />}
        />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route path="/admin/*" element={<AdminScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
