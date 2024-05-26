import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Layout from './Layout.tsx'
import { ErrorPage, HomePage, UserPage, ProductDetail, SearchPage, Showroom, UserInfo, MyCartList, MyOrderList, BuyPage, AboutPage } from './pages/index.tsx'
import LogIn from './components/auth/LogIn.tsx'
import { useEffect } from 'react'
import { RootState, useAppDispatch } from './store.ts'
import { getMe } from './slice/user.slice.ts'
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux'
import ProtectedRoute, { ProtectedRouteProps } from './components/ProtectedRoute.tsx'


function App() {
  const location = useLocation();
  const dispatch = useAppDispatch()
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated)
  useEffect(()=> {
    const action = dispatch(getMe());
    return () => {
      action.abort();
    }
  }, [dispatch, isAuthenticated]);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: isAuthenticated,
  };
  return (
    <>
      <Routes>   
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path='showroom' element={<Showroom></Showroom>}></Route>
          <Route path='search' element={<SearchPage/>}></Route>
          <Route path='about' element={<AboutPage/>}></Route>
          <Route path='user' element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<UserPage/>}/>}>
            <Route path='my-info' element={<UserInfo/>}></Route>
            <Route path='my-cart' element={<MyCartList/>}></Route>
            <Route path='my-order' element={<MyOrderList/>}></Route>
          </Route>
          <Route path='buy' element={<BuyPage/>}></Route>
          <Route path='products/:slug' element={<ProductDetail/>}></Route>
          <Route path="404" element={<ErrorPage/>} />
        </Route>
        <Route path='*' element={<Navigate replace to="/404" />} />
      </Routes>
      {!isAuthenticated && <LogIn></LogIn>}
    </>
  )
}

export default App
