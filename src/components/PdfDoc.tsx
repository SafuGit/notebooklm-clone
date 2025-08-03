import { Document, Page, pdfjs, type TextItem } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { PdfContext } from '../providers/PdfContext';
import { use, useContext, useState } from 'react';
import { ArrowLeft, ArrowRight, SquareArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

const PdfDoc = () => {
  const { pdfFile: pdf } = useContext(PdfContext);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [extractedText, setExtractedText] = useState<{ page: number; text: string }[]>([]);
  const navigate = useNavigate();
  const { setPdfFile } = use(PdfContext);
  const handleExit = () => {
    setPdfFile(null);
    navigate('/');
  };

  const onDocumentLoadSuccess = async (pdfDoc: pdfjs.PDFDocumentProxy) => {
    setNumPages(pdfDoc.numPages);
    setPageNumber(1);

    const pageTexts: { page: number; text: string }[] = [];
    for (let i = 1; i <= pdfDoc.numPages; i++) {
      const page = await pdfDoc.getPage(i);
      const textContent = await page.getTextContent();

      const pageText = textContent.items
        .filter((item): item is TextItem => 'str' in item)
        .map(item => item.str)
        .join(' ');

      pageTexts.push({ page: i, text: pageText });
    }
    setExtractedText(pageTexts);
  };

  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages));

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="p-4 bg-white shadow flex justify-between items-center">
        <div>
          <button
            className="btn btn-primary btn-circle btn-ghost"
            onClick={goToPrevPage}
          >
            <ArrowLeft />
          </button>
          <span className="mx-2">
            Page {pageNumber} of {numPages}
          </span>
          <button
            className="btn btn-primary btn-circle btn-ghost"
            onClick={goToNextPage}
          >
            <ArrowRight />
          </button>
        </div>
        <button className="btn btn-secondary btn-circle" onClick={handleExit}>
          <SquareArrowLeft />
        </button>
      </div>

      <div className="flex-1 overflow-y-scroll bg-gray-100">
        <Document file={pdf || ''} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} className="mx-auto my-4" />
        </Document>
      </div>
    </div>
  );

};

export default PdfDoc;
