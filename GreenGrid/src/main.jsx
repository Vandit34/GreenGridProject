import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import LoginPage from './Pages/LoginPage.jsx';
import Landing from './Pages/Landing.jsx';
import PostAndMarket from './Pages/PostAndMarket.jsx';
import './index.css';

// Define the router here
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoginPage />} />
      <Route path="landing" element={<Landing />} />
      <Route path="posts-and-market" element={<PostAndMarket />} />
    </>
  )
);

// Render the RouterProvider with the defined router
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
