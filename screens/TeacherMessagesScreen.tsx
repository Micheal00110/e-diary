
import React from 'react';

interface TeacherMessagesScreenProps {
  onBack: () => void;
}

const MESSAGES = [
  { id: 1, sender: 'Mrs. Okoth', time: 'Today, 8:30 AM', text: 'Reminder: The Grade 4 Science project is due this Friday.', unread: true },
  { id: 2, sender: 'Principal Maina', time: 'Yesterday', text: 'Dear Parents, please note that school closes early this Thursday for the Teachers conference.', unread: false },
  { id: 3, sender: 'Mrs. Okoth', time: '2 days ago', text: 'Good work on the Math homework yesterday! Most students performed exceptionally well.', unread: false },
];

const TeacherMessagesScreen: React.FC<TeacherMessagesScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-[#f8fcf9] min-h-screen">
      <header className="flex items-center p-4 bg-white border-b border-[#cfe7d7] sticky top-0 z-10">
        <button onClick={onBack} className="text-[#0d1b12] flex size-12 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
        </button>
        <h2 className="text-[#0d1b12] text-lg font-bold flex-1 text-center pr-12">Teacher Messages</h2>
      </header>
      <div className="p-4 space-y-4">
        {MESSAGES.map((msg) => (
          <div key={msg.id} className={`p-4 rounded-2xl border ${msg.unread ? 'bg-white border-[#13ec5b] shadow-sm' : 'bg-[#f8fcf9] border-[#cfe7d7]'}`}>
            <div className="flex justify-between items-center mb-2">
              <span className="font-black text-[#0d1b12]">{msg.sender}</span>
              <span className="text-[10px] text-[#4c9a66] font-bold uppercase">{msg.time}</span>
            </div>
            <p className="text-sm text-[#0d1b12] leading-relaxed">{msg.text}</p>
            {msg.unread && (
              <div className="mt-2 text-[10px] font-black text-[#13ec5b] uppercase tracking-widest flex items-center gap-1">
                <div className="size-1.5 rounded-full bg-[#13ec5b]"></div> NEW
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherMessagesScreen;
