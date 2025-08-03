import type React from "react";

const UploadPdf = () => {
  const handleFileInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements[0] as HTMLInputElement | null;
    const file = input && input.files ? input.files[0] : null;
    console.log("File input submitted");
    console.log(file);
    if (file) {
      console.log(file);
    }
  }

  return (
    <div>
      <form onSubmit={handleFileInput} className="flex justify-center mx-auto">
        <input type="file" className="file-input file-input-xl bg-primary text-black font-bold" />
      </form>
    </div>
  );
};

export default UploadPdf;