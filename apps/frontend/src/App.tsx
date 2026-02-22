import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Register from "./pages/Register";
import CodeEditor from "./pages/CodeEditor";
import ProtectedRouter from "./middleWare/ProtectedRouter";
import About from "./pages/About";
import Feature from "./pages/Feature";

const App = () => {
  return (
    <Router>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Intro />} />

        {/* About */}
        <Route path="/about" element={<About />} />
        {/* Feature */}
        <Route path="/feature" element={<Feature />} />
        {/* Register */}
        <Route path="/register" element={<Register />} />

        {/* Register with Room ID */}
        <Route path="/:roomId" element={<Register />} />

        {/* Protected Code Editor */}
        <Route
          path="/code/:roomId"
          element={
            <ProtectedRouter>
              <CodeEditor />
            </ProtectedRouter>
          }
        />

      </Routes>
    </Router>
  );
};

export default App;
