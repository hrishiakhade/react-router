
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,            // acts as a wrapper
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },    // instead of path:'' , we can also define index=true , same behavior achieved
      { path: 'products', element: <ProductPage /> },               // without / meaning relative path
      { path: 'products/:productId', element: <ProductDetailPage /> }             // dynamic Routes
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
