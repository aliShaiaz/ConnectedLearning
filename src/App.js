import NavBar from "./components/NavBar";
import "./css/App.css";
import ContactPage from "./components/pages/Contact";
import CoursePage from "./components/pages/Course";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/pages/Home";
import AboutPage from "./components/pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/ConnectedLearning">
            <Route
              path="/ConnectedLearning/contact"
              element={<ContactPage />}
            />
            <Route path="/ConnectedLearning/about" element={<AboutPage />} />
            <Route path="/ConnectedLearning/course" element={<CoursePage />} />
            <Route path="/ConnectedLearning/" element={<HomePage />} />
          </Route>
          <Route
            path="/contact"
            element={<Navigate to="/ConnectedLearning/contact" replace />}
          />
          <Route
            path="/about"
            element={<Navigate to="/ConnectedLearning/about" replace />}
          />
          <Route
            path="/course"
            element={<Navigate to="/ConnectedLearning/course" replace />}
          />
          <Route
            path="*"
            element={<Navigate to="/ConnectedLearning/" replace />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
