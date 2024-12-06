import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import React from 'react';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import WishlistsPage from './pages/WishlistsPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';


const App = () => {
  const login = async (loginData) => {
    const res = await fetch('http://localhost:8000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
      credentials: 'include', // Include cookies in the request
    });
    // const data = await res.json();
    // console.log(data);
    return res;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/wishlists' element={<WishlistsPage />} />
          <Route path='/login' element={<LoginPage loginSubmit={login} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>

      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App