const Chat = ({messages}: {messages: {role: string, content: string}[]}) => {
  console.log(messages);
  return (
    <div>
      {messages.map((msg, index) => (
        <div key={index} className={`chat ${msg.role === 'user' ? 'chat-start' : 'chat-end'}`}>
          <div className="chat-header">
            {msg.role === 'user' ? 'You' : 'PDF Reader AI'}
            <time className="text-xs opacity-50">{new Date().toLocaleTimeString()}</time>
          </div>
          <div className="chat-bubble">{msg.content}</div>
          <div className="chat-footer opacity-50">Seen</div>
        </div>
      ))}
    </div>
  );
};

export default Chat;