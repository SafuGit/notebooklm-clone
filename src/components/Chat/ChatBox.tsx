import { use, useState } from 'react';
import Chat from './Chat';
import { PdfContext } from '../../providers/PdfContext';
import axios from 'axios';

const ChatBox = () => {
  const [messages, setMessages] = useState<{role: string, content: string}[]>([]);
  const sessionId = sessionStorage.getItem('sessionId') || use(PdfContext).sessionId;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const content = form.message.value.trim();
    if (!content) return;

    const newMessages = [...messages, { role: 'user', content }];
    setMessages(newMessages);

    const res = await axios.post('http://localhost:3000/chat', {
      sessionId,
      message: content,
    });

    const data = await res.data;
    if (data.reply) {
      setMessages((prev) => [...prev, { role: 'model', content: data.reply }]);
    }

    form.reset();
  } 

  if (!messages) return <div>Loading chat...</div>;
  if (!sessionId) return <div>Waiting for sessionId....</div>;

  return (
    <div className="w-full h-screen flex flex-col bg-gray-50">
      <div className="p-4 border-b border-gray-200 bg-white shadow-sm">
        <h2 className="text-xl font-semibold">NotebookLM Chat</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        <Chat messages={messages}/>
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white flex items-center gap-2">
        <input
          type="text"
          placeholder="Ask a question..."
          name="message"
          className="input w-full bg-gray-100 border border-gray-400"
        />
        <button className="btn btn-primary">
          Send
        </button>
      </form>
    </div>

  );
};

export default ChatBox;