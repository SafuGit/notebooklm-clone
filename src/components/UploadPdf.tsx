import type React from "react";
import { useNavigate } from "react-router";

const UploadPdf = () => {
  const navigate = useNavigate();
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const input = e.currentTarget;
    const file = input && input.files ? input.files[0] : null;
    console.log("File input submitted");
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const base64 = reader.result as string;
        sessionStorage.setItem("pdfFile", base64);
        console.log("File read successfully and stored in sessionStorage");
        navigate('/pdf');
      }

      reader.onerror = () => {
        console.error("Error reading file");
      }

      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="flex justify-center mx-auto">
      <input type="file" className="file-input file-input-xl bg-primary text-black font-bold" onChange={handleFileInput} />
    </div>
  );
};

export default UploadPdf;