import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const PdfDoc = () => {
  const pdf = sessionStorage.getItem('pdfFile');

  return (
    <div>
      <Document file={pdf || ''} className={'w-[40%]'} >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PdfDoc;