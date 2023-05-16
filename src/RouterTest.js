import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Profile from "./common/YourFirstComponent";

function MyComponent() {
    const location = useLocation();
  
    return <h3>Current location: {location.pathname}</h3>;
  }
export default function App() {
  return (
    <Router>
      <div>
        <MyComponent />
        <Routes>
          <Route exact={true} path="/1" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}
