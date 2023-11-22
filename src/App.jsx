import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import UserList from './pages/userList/UserList'
import User from './pages/user/User'
import NewUser from './pages/newPage/NewUser'
import ProductList from './pages/productList/ProductList'
import Product from './pages/product/Product'
import NewProduct from './pages/newProduct/NewProduct'

function App() {


  return (
    <Router className=''>
      <Topbar />
      <div className=" Container flex mt-[14px]">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/userlist' element={<UserList />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/newuser' element={<NewUser />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/newProduct' element={<NewProduct />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
