import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout.tsx'
import { ErrorPage, HomePage, ProductDetail, SearchPage, Showroom } from './pages/index.tsx'
import LogIn from './components/auth/LogIn.tsx'

function App() {
  return (
    <>
      <Routes>   
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path='showroom' element={<Showroom></Showroom>}></Route>
          <Route path='search' element={<SearchPage/>}></Route>
          <Route path='about' element></Route>
          <Route path='me'>
            <Route path='my-info'></Route>
            <Route path='my-cart'></Route>
            <Route path='my-order'></Route>
          </Route>
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
