import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./component/layout/Header/Header";
import webFont from "webfontloader";
import { useEffect } from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Products/Products";
import SignIn from "./component/User/SignIn";
import Registration from "./component/User/Registration";
import store from "./store";
import { loadUser } from "./actions/userAction";

function App() {

  useEffect(() => {
    webFont.load({
      families: ["Roboto", "Droid Sans", "Chilanka"],
    });

    store.dispatch(loadUser());
  }, []);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        }
      />
      <Route
        exact
        path="/home"
        element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        }
      />
      <Route
        path="/product/:id"
        element={
          <>
            <Header />
            <ProductDetails />
            <Footer />
          </>
        }
      />
      <Route
        path="/products"
        element={
          <>
            <Header />
            <Products />
            <Footer />
          </>
        }
      />
      <Route
        path="/products/:keyword"
        element={
          <>
            <Header />
            <Products />
            <Footer />
          </>
        }
      />
      <Route
        path="/login"
        element={
          <>
            <Header />
            <SignIn />
          </>
        }
      />
      <Route
        path="/registration"
        element={
          <>
            <Header />
            <Registration />
          </>
        }
      />
      <Route
        path="/account"
        element={
          <>
            <Header />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
