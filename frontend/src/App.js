import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import Profile from "./component/User/Profile";
import { useSelector } from "react-redux";
import NotFound from "./component/layout/NotFound/NotFound";
import Loader from "./component/layout/Loader/Loader";
import UpdateProfile from "./component/User/UpdateProfile";
import ChangePassword from "./component/User/ChangePassword";

function App() {
  const location = useLocation()
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    webFont.load({
      families: ["Roboto", "Droid Sans", "Chilanka"],
    });

    store.dispatch(loadUser());
  }, []);

  const PrivateRoute = ({children}) => {
 
    return !loading && isAuthenticated ? children : <Navigate to="/login" replace state={{ location }}/>;
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
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
            exact
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
            exact
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
            exact
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
            exact
            path="/login"
            element={
              <>
                <Header />
                <SignIn />
              </>
            }
          />
          <Route
            exact
            path="/registration"
            element={
              <>
                <Header />
                <Registration />
              </>
            }
          />

          <Route
            exact
            path="/profile"
            element={
              <PrivateRoute>
                <Header />
                <Profile />
                <Footer />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/me/update"
            element={
              <PrivateRoute>
                <Header />
                <UpdateProfile/>
                <Footer />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/changePassword"
            element={
              <PrivateRoute>
                <Header />
                <ChangePassword/>
              </PrivateRoute>
            }
          />
       
          <Route
            path="*"
            element={
              <>
                <NotFound />
              </>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
