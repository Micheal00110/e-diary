
import React, { useState } from 'react';

interface ReportAbsenceScreenProps {
  onBack: () => void;
}

const ReportAbsenceScreen: React.FC<ReportAbsenceScreenProps> = ({ onBack }) => {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="bg-[#f8fcf9] min-h-screen flex flex-col items-center justify-center p-8 text-center">
         <div className="size-24 rounded-full bg-[#13ec5b]/20 text-[#13ec5b] flex items-center justify-center mb-6">
            <svg width="48" height="48" fill="currentColor" viewBox="0 0 256 256"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg>
         </div>
         <h2 className="text-[#0d1b12] text-2xl font-black mb-2">Notice Sent!</h2>
         <p className="text-[#4c9a66] mb-12">The teacher has been notified and the attendance record updated.</p>
         <button 
          onClick={onBack}
          className="w-full bg-[#13ec5b] text-[#0d1b12] font-black py-4 rounded-2xl shadow-lg border-b-4 border-[#0fb84a]"
         >
          Back to Home
         </button>
      </div>
    );
  }

  return (
    <div className="bg-[#f8fcf9] min-h-screen">
      <header className="flex items-center p-4 bg-white border-b border-[#cfe7d7] sticky top-0 z-10 shadow-sm">
        <button onClick={onBack} className="text-[#0d1b12] flex size-12 items-center">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>
        </button>
        <h2 className="text-[#0d1b12] text-lg font-black flex-1 text-center pr-12 uppercase tracking-tighter">Report Absence</h2>
      </header>

      <div className="p-6">
        <div className="bg-white p-6 rounded-[32px] border-2 border-[#cfe7d7] shadow-lg mb-8 relative">
           <div className="absolute top-4 right-6 text-[#cfe7d7]">
              <svg width="40" height="40" fill="currentColor" viewBox="0 0 256 256"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM112,176H80a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16Zm64-32H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z"></path></svg>
           </div>
           <h3 className="text-[#0d1b12] font-black text-sm uppercase tracking-widest mb-6">Digital Excuse Note</h3>
           
           <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-[#4c9a66]">Date of Absence</label>
                <input type="date" className="w-full h-12 bg-[#f8fcf9] border-2 border-[#cfe7d7] rounded-xl px-4 text-sm" />
              </div>
              
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-[#4c9a66]">Reason Category</label>
                <select className="w-full h-12 bg-[#f8fcf9] border-2 border-[#cfe7d7] rounded-xl px-4 text-sm">
                   <option>Medical / Sickness</option>
                   <option>Family Emergency</option>
                   <option>Travel / Planned Absence</option>
                   <option>Other</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-[#4c9a66]">Additional Details</label>
                <textarea rows={4} placeholder="Type brief explanation here..." className="w-full bg-[#f8fcf9] border-2 border-[#cfe7d7] rounded-xl px-4 py-3 text-sm" />
              </div>
           </div>
        </div>

        <button 
          onClick={() => setSent(true)}
          className="w-full bg-[#1380ec] text-white font-black py-4 rounded-2xl shadow-xl uppercase tracking-widest border-b-4 border-blue-700"
        >
          Submit to Teacher
        </button>
      </div>
    </div>
  );
};

export default ReportAbsenceScreen;
