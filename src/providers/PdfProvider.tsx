import React from 'react';
import { Navigate, useLocation } from 'react-router';

const PdfProvider = ({ children }: { children: React.ReactNode }) => {
  const pdfFile = sessionStorage.getItem('pdfFile');
  const location = useLocation();

  if (pdfFile && location.pathname !== '/pdf') {
    return <Navigate to="/pdf" replace />;
  }

  return children;
};

export default PdfProvider;
