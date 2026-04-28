import { useState, useEffect, useRef } from "react";

const ChatBar = ({ contact, messages, onClose, onSendMessage, isMinimized: initialMinimized = false }) => {
  const [isMinimized, setIsMinimized] = useState(initialMinimized);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!isMinimized) {
      scrollToBottom();
    }
  }, [messages, isMinimized]);

  const handleSend = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      onSendMessage(inputText);
      setInputText("");
    }
  };

  if (isMinimized) {
    return (
      <div className="w-[250px] bg-[#1a1a1a] border border-gray-800 rounded-t-xl shadow-2xl pointer-events-auto">
        <div 
          className="p-3 flex justify-between items-center cursor-pointer hover:bg-gray-800 rounded-t-xl"
          onClick={() => setIsMinimized(false)}
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="relative flex-shrink-0">
              <img src={contact.avatar} className="w-6 h-6 rounded-full" />
              {contact.online && (
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 border border-[#1a1a1a] rounded-full"></div>
              )}
            </div>
            <span className="font-bold text-xs truncate text-white">{contact.name}</span>
          </div>
          <div className="flex gap-2 flex-shrink-0 text-gray-400">
            <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="hover:text-white">✕</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[320px] h-[400px] bg-[#1a1a1a] border border-gray-800 rounded-t-xl shadow-2xl flex flex-col pointer-events-auto">
      {/* Header */}
      <div 
        className="p-3 border-b border-gray-800 flex justify-between items-center cursor-pointer hover:bg-gray-800 rounded-t-xl"
        onClick={() => setIsMinimized(true)}
      >
        <div className="flex items-center gap-2 min-w-0">
          <div className="relative flex-shrink-0">
            <img src={contact.avatar} className="w-8 h-8 rounded-full" />
            {contact.online && (
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#1a1a1a] rounded-full"></div>
            )}
          </div>
          <div className="min-w-0">
            <h4 className="text-sm font-bold truncate text-white">{contact.name}</h4>
            <p className="text-[10px] text-gray-400 truncate">{contact.role}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-400">
          <button className="hover:text-white">...</button>
          <button className="hover:text-white">📹</button>
          <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="hover:text-white">✕</button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-4 bg-[#121212]">
        <div className="flex flex-col items-center mb-4">
          <img src={contact.avatar} className="w-16 h-16 rounded-full mb-2" />
          <h5 className="font-bold text-sm text-white">{contact.name}</h5>
          <p className="text-xs text-gray-400 text-center px-4">{contact.role} @ {contact.company || "Tech Inc"}</p>
          <div className="h-px w-full bg-gray-800 mt-4"></div>
        </div>

        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.type === 'outbound' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-2.5 rounded-xl text-xs ${
              msg.type === 'outbound' 
                ? 'bg-blue-900/30 text-blue-100 rounded-br-none border border-blue-800/30' 
                : 'bg-gray-800/50 text-gray-200 rounded-bl-none border border-gray-700/50'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-800 bg-[#1a1a1a]">
        <form onSubmit={handleSend} className="relative">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend(e);
              }
            }}
            placeholder="เขียนข้อความ..."
            className="w-full bg-[#2a2a2a] border border-transparent focus:border-gray-700 rounded-lg pl-3 pr-10 py-2 text-xs text-white outline-none resize-none h-[60px]"
          />
          <button 
            type="submit"
            disabled={!inputText.trim()}
            className="absolute right-2 bottom-2 text-blue-500 disabled:text-gray-600 font-bold text-xs"
          >
            ส่ง
          </button>
        </form>
        <div className="flex justify-between mt-2">
          <div className="flex gap-3 text-gray-400">
            <button className="hover:text-white text-lg">🖼️</button>
            <button className="hover:text-white text-lg">📎</button>
            <button className="hover:text-white text-lg">😊</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
