import Chat from './Chat';

const ChatBox = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-gray-50">
      <div className="p-4 border-b border-gray-200 bg-white shadow-sm">
        <h2 className="text-xl font-semibold">NotebookLM Chat</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        <Chat />
      </div>

      <div className="p-4 border-t border-gray-200 bg-white flex items-center gap-2">
        <input
          type="text"
          placeholder="Ask a question..."
          className="input w-full bg-gray-100 border border-gray-400"
        />
        <button className="btn btn-primary">
          Send
        </button>
      </div>
    </div>

  );
};

export default ChatBox;