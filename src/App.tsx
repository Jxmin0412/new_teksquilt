import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <h1 className="text-3xl font-bold underline">About Page</h1>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <h1 className="text-3xl font-bold underline">404 Not Found</h1>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
