import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout.tsx'
import { ErrorPage, HomePage, UserPage, ProductDetail, SearchPage, Showroom, UserInfo, MyCartList, MyOrderList, BuyPage, AboutPage } from './pages/index.tsx'
import LogIn from './components/auth/LogIn.tsx'

function App() {
  return (
    <>
      <Routes>   
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path='showroom' element={<Showroom></Showroom>}></Route>
          <Route path='search' element={<SearchPage/>}></Route>
          <Route path='about' element={<AboutPage/>}></Route>
          <Route path='user' element={<UserPage/>}>
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
      <LogIn></LogIn>
    </>
  )
}

export default App
