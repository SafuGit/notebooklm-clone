import React, { createContext } from "react";

type PdfContextType = {
  pdfFile: File | null;
  setPdfFile: React.Dispatch<React.SetStateAction<File | null>>;
  sessionId: string | null;
  setSessionId: React.Dispatch<React.SetStateAction<string | null>>;
};

export const PdfContext = createContext<PdfContextType>(null!);