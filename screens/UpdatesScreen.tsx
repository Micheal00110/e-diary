
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const UPDATES = [
  { id: 1, type: 'HOMEWORK', title: 'New Math Homework', detail: 'Grade 4: Exercises 10-15 on fractions.', time: '10 mins ago' },
  { id: 2, type: 'MESSAGE', title: 'School Closing Early', detail: 'Reminder: Closing at 12:30 PM this Thursday.', time: '2 hours ago' },
  { id: 3, type: 'RESULT', title: 'Science Results Posted', detail: 'Term 3 Project results are now available.', time: 'Yesterday' },
  { id: 4, type: 'EVENT', title: 'Sports Day Photos', detail: 'Check out the new gallery from Sports Day!', time: '1 day ago' },
];

const UpdatesScreen: React.FC = () => {
  const [news, setNews] = useState<string>('');
  const [links, setLinks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchSchoolNews = async () => {
      setLoading(true);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: "Summarize the top 3 latest educational news items in Kenya for primary school parents. Keep it brief and encouraging.",
          config: {
            tools: [{ googleSearch: {} }],
          },
        });
        
        setNews(response.text || 'No news available at the moment.');
        const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
        if (chunks) {
          setLinks(chunks.filter((c: any) => c.web).map((c: any) => c.web));
        }
      } catch (error) {
        console.error("Search error:", error);
        setNews("Stay tuned for local school updates and regional news.");
      } finally {
        setLoading(false);
      }
    };

    fetchSchoolNews();
  }, []);

  return (
    <div className="bg-[#f8fcf9] min-h-screen relative">
      {/* Background Image Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.04] bg-center bg-cover"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80')" }}
      />

      <header className="relative p-6 h-48 flex flex-col justify-end overflow-hidden rounded-b-[40px] shadow-lg mb-4">
        <img 
          src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80" 
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          alt="Happy students"
        />
        <div className="relative z-10">
          <h2 className="text-white text-3xl font-black tracking-tighter drop-shadow-md">Activity Stream</h2>
          <p className="text-white/80 text-xs font-bold uppercase tracking-widest mt-1">Real-time School Updates</p>
        </div>
      </header>

      <div className="p-4 space-y-6 relative z-10">
        {/* Search Grounded Insights Section */}
        <div className="bg-[#1380ec] text-white p-5 rounded-3xl shadow-xl border-4 border-white">
          <div className="flex items-center gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path>
              <path d="M128,24a104,104,0,1,0,104,104A104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM136,128V80a8,8,0,0,0-16,0v48a8,8,0,0,0,16,0Zm32,0a8,8,0,1,1-8-8A8,8,0,0,1,168,128Z"></path>
            </svg>
            <h3 className="text-sm font-black uppercase tracking-widest">Smart Insights (Kenya)</h3>
          </div>
          
          {loading ? (
            <div className="flex flex-col gap-2 animate-pulse">
              <div className="h-4 bg-white/20 rounded w-3/4"></div>
              <div className="h-4 bg-white/20 rounded w-full"></div>
            </div>
          ) : (
            <>
              <p className="text-sm leading-relaxed mb-4 opacity-90">{news}</p>
              {links.length > 0 && (
                <div className="pt-3 border-t border-white/20">
                  <p className="text-[10px] font-black uppercase mb-2 opacity-60">Verified Sources:</p>
                  <div className="flex flex-wrap gap-2">
                    {links.slice(0, 3).map((link, i) => (
                      <a 
                        key={i} 
                        href={link.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] bg-white/10 hover:bg-white/20 px-2 py-1 rounded transition-colors block underline truncate max-w-[120px]"
                      >
                        {link.title || 'Read source'}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <div className="space-y-4">
          {UPDATES.map((update) => (
            <div key={update.id} className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border-2 border-[#cfe7d7] shadow-sm relative overflow-hidden group hover:border-[#13ec5b] transition-all">
              <div className="absolute top-0 right-0 p-2">
                 <span className="text-[8px] font-black text-[#4c9a66] uppercase bg-[#f0f9f2] px-2 py-0.5 rounded">{update.time}</span>
              </div>
              <div className="flex items-start gap-4">
                <div className={`size-10 rounded-full flex items-center justify-center shrink-0 ${
                  update.type === 'HOMEWORK' ? 'bg-blue-100 text-blue-600' : 
                  update.type === 'MESSAGE' ? 'bg-orange-100 text-orange-600' :
                  update.type === 'RESULT' ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'
                }`}>
                  {update.type === 'HOMEWORK' && <BookIcon />}
                  {update.type === 'MESSAGE' && <ChatIcon />}
                  {update.type === 'RESULT' && <ChartIcon />}
                  {update.type === 'EVENT' && <StarIcon />}
                </div>
                <div className="flex-1">
                  <h3 className="text-[#0d1b12] font-black text-base">{update.title}</h3>
                  <p className="text-sm text-[#4c9a66] mt-1 leading-relaxed">{update.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-8 flex flex-col items-center opacity-40">
         <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=300&q=50" className="size-20 rounded-full grayscale mb-2 object-cover" alt="Students playing" />
         <button className="text-[#4c9a66] font-bold text-xs uppercase tracking-widest border-b border-[#cfe7d7] pb-1">Archive</button>
      </div>
    </div>
  );
};

const BookIcon = () => <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M208,32H72A32,32,0,0,0,40,64V192a32,32,0,0,0,32,32H208a8,8,0,0,0,8-8V40A8,8,0,0,0,208,32ZM72,48H192V192H72a16,16,0,0,1,0-32h88a8,8,0,0,0,0-16H72a16,16,0,0,1,0-32h88a8,8,0,0,0,0-16H72a16,16,0,0,1,0-32Z"></path></svg>;
const ChatIcon = () => <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24a104,104,0,0,0-104,104c0,21.78,6.86,42.82,19.78,60.52L32,224a8,8,0,0,0,10.29,9.71l35.48-11.83A104,104,0,1,0,128,24Z"></path></svg>;
const ChartIcon = () => <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M232,128a104,104,0,1,1-104-104A104.11,104.11,0,0,1,232,128Z"></path></svg>;
const StarIcon = () => <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,212.41a8,8,0,0,1-12.08,8.77L150.41,198,109.91,221.18A8,8,0,0,1,97.83,212.41l13.75-58.73-45-38.83a8,8,0,0,1,4.49-14.05l60.15-5.26,23.36-55.77a8,8,0,0,1,14.7,0l23.36,55.77,60.15,5.26A8,8,0,0,1,234.29,114.85Z"></path></svg>;

export default UpdatesScreen;
