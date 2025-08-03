import { Document, Page, pdfjs, type TextItem } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { PdfContext } from '../providers/PdfContext';
import { useContext, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

const PdfDoc = () => {
  const { pdfFile: pdf } = useContext(PdfContext);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [extractedText, setExtractedText] = useState<string>('');

  const onDocumentLoadSuccess = async (pdfDoc: pdfjs.PDFDocumentProxy) => {
    setNumPages(pdfDoc.numPages);
    setPageNumber(1);

    let fullText = '';
    for (let i = 1; i <= pdfDoc.numPages; i++) {
      const page = await pdfDoc.getPage(i);
      const textContent = await page.getTextContent();

      const pageText = textContent.items
        .filter((item): item is TextItem => 'str' in item)
        .map(item => item.str)
        .join(' ');

      fullText += pageText + '\n\n';
    }
    setExtractedText(fullText);
  };

  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages));

  return (
    <div>
      <Document
        file={pdf || ''}
        className={'w-[40%]'}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <div className="flex items-center">
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
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
};

export default PdfDoc;
