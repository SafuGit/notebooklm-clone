import React, { createContext } from "react";

type PdfContextType = {
  pdfFile: File | null;
  setPdfFile: React.Dispatch<React.SetStateAction<File | null>>;
};

export const PdfContext = createContext<PdfContextType>(null!);