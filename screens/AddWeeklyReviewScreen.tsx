
import React from 'react';

interface AddWeeklyReviewScreenProps {
  onBack: () => void;
}

const AddWeeklyReviewScreen: React.FC<AddWeeklyReviewScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-[#fcfdfa] min-h-screen">
      <header className="flex items-center p-4 bg-white border-b border-[#cfe7d7] sticky top-0 z-10">
        <button onClick={onBack} className="text-[#0d1b12] flex size-12 items-center">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>
        </button>
        <h2 className="text-[#0d1b12] text-lg font-black flex-1 text-center pr-12 uppercase">Weekly Review</h2>
      </header>

      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-[#4c9a66] tracking-widest">Select Student</label>
          <select className="w-full h-14 bg-[#f0f9f2] border-2 border-[#cfe7d7] rounded-xl px-4 text-[#0d1b12]">
            <option>John Mwangi</option>
            <option>Mary Kamau</option>
            <option>David Omondi</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-[#4c9a66] tracking-widest">Behavior</label>
            <select className="w-full h-12 bg-[#f0f9f2] border-2 border-[#cfe7d7] rounded-xl px-3 text-xs">
              <option>Excellent</option>
              <option>Good</option>
              <option>Average</option>
              <option>Needs Improvement</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-[#4c9a66] tracking-widest">Attendance</label>
            <input placeholder="e.g. 5/5" className="w-full h-12 bg-[#f0f9f2] border-2 border-[#cfe7d7] rounded-xl px-3 text-xs" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-[#4c9a66] tracking-widest">Teacher's Remark</label>
          <textarea 
            placeholder="Write summary for the week..."
            rows={4}
            className="w-full bg-[#f0f9f2] border-2 border-[#cfe7d7] rounded-xl px-4 py-3 text-[#0d1b12]"
          />
        </div>

        <button 
          onClick={onBack}
          className="w-full bg-[#13ec5b] text-[#0d1b12] font-black py-4 rounded-xl shadow-lg uppercase tracking-widest border-b-4 border-[#0fb84a]"
        >
          Post Weekly Review
        </button>
      </div>
    </div>
  );
};

export default AddWeeklyReviewScreen;
