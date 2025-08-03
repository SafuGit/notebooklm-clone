import { SquareArrowLeft } from 'lucide-react';
import PdfDoc from '../components/PdfDoc';
import { useNavigate } from 'react-router';
import { use } from 'react';
import { PdfContext } from '../providers/PdfContext';

const PdfPage = () => {
  const navigate = useNavigate();
  const { setPdfFile } = use(PdfContext);
  const handleExit = () => {
    setPdfFile(null);
    navigate('/');
  };

  return (
    <div className='flex justify-between items-start'>
      <PdfDoc />
      <div className='flex flex-col items-center mt-4 mr-4 '>
        <button className='btn btn-secondary btn-circle' onClick={handleExit}>
          <SquareArrowLeft></SquareArrowLeft>
        </button>
        <h1>Go Back</h1>
      </div>
    </div>
  );
};

export default PdfPage;