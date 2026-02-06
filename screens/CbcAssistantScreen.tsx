
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface CbcAssistantScreenProps {
  onBack: () => void;
}

const CbcAssistantScreen: React.FC<CbcAssistantScreenProps> = ({ onBack }) => {
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Jambo! I am your CBC Smart Assistant. How can I help you with your child\'s learning today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: 'You are a helpful and professional educational assistant for the Kenyan Competency-Based Curriculum (CBC). You provide clear, encouraging, and accurate information to parents and teachers of primary school students. Use some local Kenyan context where appropriate (e.g. mention KICD rubrics, grades, or local study materials). Keep responses concise.',
          tools: [{ googleSearch: {} }]
        }
      });

      setMessages(prev => [...prev, { role: 'bot', text: response.text || "I'm sorry, I couldn't process that. Please try again." }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'bot', text: 'I am having a bit of trouble connecting to the network. Please try again in a moment!' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f8fcf9] min-h-screen flex flex-col relative">
       {/* Background Decoration */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] bg-center bg-cover"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80')" }}
      />

      <header className="flex items-center p-4 bg-white border-b border-[#cfe7d7] sticky top-0 z-10 shadow-sm">
        <button onClick={onBack} className="text-[#0d1b12] flex size-12 items-center">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>
        </button>
        <div className="flex-1 flex flex-col items-center pr-12">
          <h2 className="text-[#0d1b12] text-sm font-black uppercase tracking-widest">Smart Mwalimu</h2>
          <span className="text-[8px] font-black text-[#13ec5b] animate-pulse">● CBC AI ONLINE</span>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 relative z-0">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed shadow-sm ${
              msg.role === 'user' 
                ? 'bg-[#1380ec] text-white rounded-tr-none' 
                : 'bg-white text-[#0d1b12] border border-[#cfe7d7] rounded-tl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
             <div className="bg-white p-4 rounded-3xl border border-[#cfe7d7] flex gap-1">
                <div className="size-1.5 bg-[#cfe7d7] rounded-full animate-bounce"></div>
                <div className="size-1.5 bg-[#cfe7d7] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="size-1.5 bg-[#cfe7d7] rounded-full animate-bounce [animation-delay:0.4s]"></div>
             </div>
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      <div className="p-4 bg-white border-t border-[#cfe7d7] flex gap-2 items-center z-10">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask anything about CBC..."
          className="flex-1 bg-[#f8fcf9] border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#13ec5b]"
        />
        <button 
          onClick={handleSend}
          disabled={loading}
          className="bg-[#13ec5b] text-[#0d1b12] size-12 rounded-2xl flex items-center justify-center shadow-lg active:scale-90 transition-all disabled:opacity-50"
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M231.87,114l-168-95.89A16,16,0,0,0,40.92,37.34L71.55,128,40.92,218.66A16,16,0,0,0,56,240a16.15,16.15,0,0,0,7.93-2.1l167.94-95.89a16,16,0,0,0,0-28ZM56,224,86.67,136H152a8,8,0,0,0,0-16H86.67L56,32l168,96Z"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default CbcAssistantScreen;
