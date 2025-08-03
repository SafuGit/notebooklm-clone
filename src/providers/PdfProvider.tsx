import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router';
import { PdfContext } from './PdfContext';

const PdfProvider = ({ children }: { children: React.ReactNode }) => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const location = useLocation();

  if (pdfFile && location.pathname !== '/pdf') {
    return <Navigate to="/pdf" replace />;
  }

  const pdfData = {
    pdfFile,
    setPdfFile,
    sessionId,
    setSessionId
  }
  return <PdfContext.Provider value={pdfData}>{children}</PdfContext.Provider>;
};

export default PdfProvider;
