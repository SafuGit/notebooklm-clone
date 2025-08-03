import type React from "react";

const UploadPdf = () => {
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const input = e.currentTarget;
    const file = input && input.files ? input.files[0] : null;
    console.log("File input submitted");
    console.log(file);
    if (file) {
      console.log(file);
    }
  }

  return (
    <div className="flex justify-center mx-auto">
      <input type="file" className="file-input file-input-xl bg-primary text-black font-bold" onChange={handleFileInput} />
    </div>
  );
};

export default UploadPdf;