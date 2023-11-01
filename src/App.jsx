import Header from "./components/Header";

import { BrowserRouter as Router } from "react-router-dom";

import { motion } from "framer-motion";
import AnimRoutes from "./AnimRoutes";

function App() {
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </>
  );
}

export default App;
