
import React, { useState } from 'react';

interface AddHomeworkScreenProps {
  onBack: () => void;
}

const AddHomeworkScreen: React.FC<AddHomeworkScreenProps> = ({ onBack }) => {
  const [subject, setSubject] = useState('');
  const [task, setTask] = useState('');

  return (
    <div className="bg-[#fcfdfa] min-h-screen">
      <header className="flex items-center p-4 bg-white border-b border-[#cfe7d7] sticky top-0 z-10">
        <button onClick={onBack} className="text-[#0d1b12] flex size-12 items-center">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>
        </button>
        <h2 className="text-[#0d1b12] text-lg font-black flex-1 text-center pr-12 uppercase">Add Homework</h2>
      </header>

      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-[#4c9a66] tracking-widest">Select Subject</label>
          <select 
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full h-14 bg-[#f0f9f2] border-2 border-[#cfe7d7] rounded-xl px-4 text-[#0d1b12] focus:ring-[#13ec5b] focus:border-[#13ec5b]"
          >
            <option value="">-- Choose Subject --</option>
            <option>Mathematics</option>
            <option>English</option>
            <option>Science</option>
            <option>Kiswahili</option>
            <option>Social Studies</option>
            <option>Religious Education</option>
            <option>Art & Craft</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-[#4c9a66] tracking-widest">Homework Description</label>
          <textarea 
            placeholder="Type task here... e.g. Page 24, Exercises 1-5"
            rows={5}
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full bg-[#f0f9f2] border-2 border-[#cfe7d7] rounded-xl px-4 py-3 text-[#0d1b12] focus:ring-[#13ec5b] focus:border-[#13ec5b]"
          />
        </div>

        <div className="bg-[#f8fcf9] p-4 rounded-xl border-l-4 border-yellow-400 text-xs text-[#0d1b12] italic">
          This homework will be sent instantly to all parents of Grade 4.
        </div>

        <button 
          onClick={onBack}
          className="w-full bg-[#13ec5b] text-[#0d1b12] font-black py-4 rounded-xl shadow-lg active:scale-95 transition-all uppercase tracking-widest border-b-4 border-[#0fb84a]"
        >
          Publish Homework
        </button>
      </div>
    </div>
  );
};

export default AddHomeworkScreen;
