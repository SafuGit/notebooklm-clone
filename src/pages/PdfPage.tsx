import PdfDoc from '../components/PdfDoc';
import ChatBox from '../components/Chat/ChatBox';

const PdfPage = () => {
  return (
    <div className='flex justify-between items-start bg-white text-black'>
      <PdfDoc />
      <div className='flex w-full'>
        <ChatBox />
      </div>
    </div>
  );
};

export default PdfPage;