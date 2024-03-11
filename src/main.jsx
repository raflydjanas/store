import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import LoginPage from './page/Login'
import RegisterPage from './page/Register'
import ProductsPage from './page/Products'
import DetailProductPage from './page/DetailsProduct'
import store from './redux/store'
import CartPage from './page/Cart'
import FakeProductsPage from './page/FakeProducts'
import DarkModeContextProvaider from './constext/DarkMode'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/products',
    element: <ProductsPage />
  },
  {
    path: '/product/:id',
    element: <DetailProductPage />
  },
  {
    path: '/cart',
    element: <CartPage />
  },
  {
    path: '/fake',
    element: <FakeProductsPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvaider>
        <RouterProvider router={router} />
      </DarkModeContextProvaider>
    </Provider>
  </React.StrictMode>,
)
