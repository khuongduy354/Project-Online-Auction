import React, { useState, useEffect } from 'react';
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/products" element={<HomePage />} />
      <Route path="/products/:id" element={<DetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <RouterProvider router={router} />
    </div>
  );
}