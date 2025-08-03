import UploadPdf from "./components/UploadPdf"

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-6 text-4xl font-bold text-center">Upload a Pdf!</h1>
      <UploadPdf></UploadPdf>
    </div>
  )
}

export default App
