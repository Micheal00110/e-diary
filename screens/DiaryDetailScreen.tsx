
import React, { useState, useRef } from 'react';
import { Homework } from '../types';

interface DiaryDetailScreenProps {
  onBack: () => void;
  onProfileClick: () => void;
}

const HOMEWORK: Homework[] = [
  { subject: 'Math', task: 'Solve problems 1-10 on page 25' },
  { subject: 'English', task: 'Read chapter 3 and answer questions' },
  { subject: 'Science', task: 'Prepare for the experiment on acids' },
  { subject: 'Kiswahili', task: 'Insha: Maisha yangu ya baadaye' },
];

const DiaryDetailScreen: React.FC<DiaryDetailScreenProps> = ({ onBack, onProfileClick }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [studentPhoto, setStudentPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleMarkAsSeen = () => {
    setShowConfirmation(true);
  };

  const confirmMarkAsSeen = () => {
    console.log('Diary marked as seen');
    setShowConfirmation(false);
  };

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStudentPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-[#fcfdfa] min-h-screen relative">
      <header className="flex items-center p-4 bg-white border-b border-[#cfe7d7] sticky top-0 z-10">
        <button onClick={onBack} className="text-[#0d1b12] flex size-12 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
        </button>
        <h2 className="text-[#0d1b12] text-lg font-bold flex-1 text-center pr-12 uppercase">Homework Diary</h2>
      </header>

      <div className="p-4">
        {/* Student Identification Area */}
        <div className="mb-6 flex items-center gap-4 bg-white p-3 rounded-2xl border-2 border-[#cfe7d7] shadow-sm relative">
          <div className="relative cursor-pointer group" onClick={handlePhotoClick}>
            <div className="size-16 rounded-xl bg-[#f0f9f2] border-2 border-dashed border-[#13ec5b] overflow-hidden flex items-center justify-center">
              {studentPhoto ? (
                <img src={studentPhoto} alt="Student" className="w-full h-full object-cover" />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4c9a66" viewBox="0 0 256 256">
                  <path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.72,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56ZM128,184a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,184Zm0-80a32,32,0,1,0,32,32A32,32,0,0,0,128,104Z"></path>
                </svg>
              )}
            </div>
            <div className="absolute -bottom-1 -right-1 bg-[#13ec5b] text-[#0d1b12] p-1 rounded-full border border-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128ZM128,80a8,8,0,0,0-8,8v32H88a8,8,0,0,0,0,16h32v32a8,8,0,0,0,16,0V136h32a8,8,0,0,0,0-16H136V88A8,8,0,0,0,128,80Z"></path>
              </svg>
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleFileChange} 
            />
          </div>
          <div className="flex-1 cursor-pointer" onClick={onProfileClick}>
            <h3 className="text-[#0d1b12] text-base font-black uppercase tracking-tight">John Mwangi</h3>
            <p className="text-[10px] font-bold text-[#4c9a66] uppercase tracking-widest">Adm No: 2024/042 • Grade 4</p>
            <p className="text-[9px] text-red-500 font-bold mt-1 uppercase">★ Private - Parent View</p>
          </div>
          <button onClick={onProfileClick} className="size-10 flex items-center justify-center text-[#cfe7d7]">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm112,48a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H216A8,8,0,0,1,240,208Z"></path></svg>
          </button>
        </div>

        <div className="flex justify-between items-baseline mb-4">
          <h2 className="text-[#0d1b12] text-2xl font-black underline decoration-[#13ec5b] decoration-4 underline-offset-4 uppercase tracking-tighter">Monday</h2>
          <span className="text-[#4c9a66] text-sm font-bold">12th Oct 2024</span>
        </div>

        {/* Physical Diary Table Format */}
        <div className="overflow-hidden rounded-2xl border-2 border-[#cfe7d7] bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f0f9f2] text-[#0d1b12] text-[10px] font-black uppercase tracking-widest border-b-2 border-[#cfe7d7]">
                <th className="px-3 py-3 border-r border-[#cfe7d7] w-1/4">Subject</th>
                <th className="px-3 py-3 border-r border-[#cfe7d7]">Task Assigned</th>
                <th className="px-3 py-3 w-16 text-center">Tick</th>
              </tr>
            </thead>
            <tbody>
              {HOMEWORK.map((item, idx) => (
                <tr key={idx} className="border-b border-[#cfe7d7] last:border-b-0">
                  <td className="px-3 py-4 text-sm font-black text-[#0d1b12] border-r border-[#cfe7d7] align-top bg-[#f8fcf9]/50">
                    {item.subject}
                  </td>
                  <td className="px-3 py-4 text-sm text-[#4c9a66] border-r border-[#cfe7d7] leading-relaxed italic">
                    {item.task}
                  </td>
                  <td className="px-3 py-4 text-center">
                    <div className="size-5 mx-auto border-2 border-[#cfe7d7] rounded"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Signature and Remark Section */}
        <div className="mt-6 space-y-6">
          <div className="bg-[#f8fcf9] p-4 rounded-xl border-l-4 border-[#13ec5b]">
            <h3 className="text-[#0d1b12] text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Teacher's Remark</h3>
            <p className="text-[#0d1b12] text-sm leading-relaxed italic">
              "John is participating more in science experiments. Keep up the good work on handwriting."
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase text-[#4c9a66]">Teacher Signature</p>
              <div className="h-12 border-b-2 border-dashed border-[#cfe7d7] flex items-end pb-1 overflow-hidden">
                <span className="font-serif text-lg opacity-40">M. Okoth</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase text-[#4c9a66]">Parent Signature</p>
              <div className="h-12 border-b-2 border-dashed border-[#cfe7d7] flex items-end pb-1 overflow-hidden">
                <span className="text-[#cfe7d7] text-xs italic">Sign here...</span>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={handleMarkAsSeen}
          className="w-full bg-[#13ec5b] text-[#0d1b12] font-black py-4 rounded-xl mt-8 shadow-lg active:scale-[0.95] transition-all uppercase tracking-widest border-b-4 border-[#0fb84a]"
        >
          Mark as Seen
        </button>
      </div>

      {/* Confirmation Dialog Overlay */}
      {showConfirmation && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-6 backdrop-blur-[2px]">
          <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
            <h3 className="text-[#0d1b12] text-xl font-black mb-3">Confirm Check</h3>
            <p className="text-[#4c9a66] text-sm leading-relaxed mb-8">
              Confirm you have reviewed the tasks and remarks.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => setShowConfirmation(false)}
                className="flex-1 bg-[#f0f2f0] text-[#0d1b12] font-bold py-3 rounded-xl active:scale-[0.98] transition-all"
              >
                Back
              </button>
              <button 
                onClick={confirmMarkAsSeen}
                className="flex-1 bg-[#13ec5b] text-[#0d1b12] font-black py-3 rounded-xl active:scale-[0.98] transition-all shadow-md"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiaryDetailScreen;
