import type React from "react";
import { use } from "react";
import { useNavigate } from "react-router";
import { PdfContext } from "../providers/PdfContext";

const UploadPdf = () => {
  const navigate = useNavigate();
  const { setPdfFile } = use(PdfContext);
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const input = e.currentTarget;
    const file = input && input.files ? input.files[0] : null;
    console.log("File input submitted");
    if (file) {
      setPdfFile(file);
      navigate("/pdf", { replace: true });
    }
  }

  return (
    <div className="flex justify-center mx-auto">
      <input type="file" className="file-input file-input-xl bg-primary text-black font-bold" onChange={handleFileInput} />
    </div>
  );
};

export default UploadPdf;