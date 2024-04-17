import Header from "./components/Header";

import { BrowserRouter as Router } from "react-router-dom";

import AnimRoutes from "./AnimRoutes";

function App() {
  return (
    <div className="font-vt323">
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </div>
  );
}

export default App;
