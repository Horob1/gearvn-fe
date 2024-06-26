import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout.tsx";
import {
  ErrorPage,
  HomePage,
  UserPage,
  ProductDetail,
  SearchPage,
  Showroom,
  UserInfo,
  MyCartList,
  MyOrderList,
  BuyPage,
  AboutPage,
  PaymentSuccessPage,
} from "./pages/index.tsx";
import LogIn from "./components/auth/LogIn.tsx";
import { useEffect } from "react";
import { RootState, useAppDispatch } from "./store.ts";
import { getMe } from "./slice/user.slice.ts";
import { useSelector } from "react-redux";
import ProtectedRoute, {
  ProtectedRouteProps,
} from "./components/ProtectedRoute.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import { Toaster } from "react-hot-toast";
import { PopupOauth } from "./components/PopupOauth.tsx";

function App() {
  const dispatch = useAppDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );
  useEffect(() => {
    const action = dispatch(getMe());
    return () => {
      action.abort();
    };
  }, [dispatch]);
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    isAuthenticated: isAuthenticated,
  };

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path="showroom" element={<Showroom></Showroom>}></Route>
          <Route path="search" element={<SearchPage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
          <Route
            path="user"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<UserPage />}
              />
            }
          >
            <Route path="my-info" element={<UserInfo />}></Route>
            <Route path="my-cart" element={<MyCartList />}></Route>
            <Route path="my-order" element={<MyOrderList />}></Route>
          </Route>
          <Route path="buy" element={<BuyPage />}></Route>
          <Route path="products/:slug" element={<ProductDetail />}></Route>
          <Route path="404" element={<ErrorPage />} />
          <Route path="payment-success" element={<PaymentSuccessPage />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>

      {!isAuthenticated && (
        <>
          <PopupOauth></PopupOauth>
          <LogIn></LogIn>
        </>
      )}
      <Toaster
        position="top-right"
        toastOptions={{
          className: "m r-4",
        }}
        reverseOrder={false}
      />
    </>
  );
}

export default App;
