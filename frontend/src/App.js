import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./component/layout/Header/Header";
import webFont from "webfontloader";
import { useEffect } from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home"

function App() {
  useEffect(() => {
    webFont.load({
      families: ["Roboto", "Droid Sans", "Chilanka"],
    });
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home/>
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;