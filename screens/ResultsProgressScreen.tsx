
import React from 'react';

interface ResultsProgressScreenProps {
  onBack: () => void;
}

const RESULTS = [
  { subject: 'Mathematics', score: 88, grade: 'A' },
  { subject: 'English', score: 76, grade: 'B+' },
  { subject: 'Science', score: 92, grade: 'A' },
  { subject: 'Kiswahili', score: 84, grade: 'A-' },
  { subject: 'Social Studies', score: 70, grade: 'B' },
];

const ResultsProgressScreen: React.FC<ResultsProgressScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-[#f8fcf9] min-h-screen">
      <header className="flex items-center p-4 bg-white border-b border-[#cfe7d7] sticky top-0 z-10">
        <button onClick={onBack} className="text-[#0d1b12] flex size-12 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
        </button>
        <h2 className="text-[#0d1b12] text-lg font-bold flex-1 text-center pr-12">Results & Progress</h2>
      </header>
      <div className="p-4">
        <div className="bg-[#f0f9f2] p-6 rounded-2xl mb-6 border border-[#cfe7d7] flex flex-col items-center">
          <span className="text-[#4c9a66] text-xs font-black uppercase tracking-widest mb-1">Current Mean Grade</span>
          <h1 className="text-6xl font-black text-[#0d1b12]">A-</h1>
          <p className="text-[#4c9a66] text-xs font-bold mt-2">Class Position: 5 / 42</p>
        </div>

        <h3 className="text-[#0d1b12] text-lg font-black mb-4 uppercase tracking-tighter">Subject Breakdown</h3>
        <div className="space-y-3">
          {RESULTS.map((res, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-[#cfe7d7] shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-[#0d1b12]">{res.subject}</span>
                <span className="text-sm font-black text-[#13ec5b]">{res.grade}</span>
              </div>
              <div className="w-full bg-[#e7f3eb] h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-[#13ec5b] h-full rounded-full transition-all duration-1000" 
                  style={{ width: `${res.score}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="text-[10px] text-[#4c9a66] font-bold">Progress: Improving</span>
                <span className="text-[10px] text-[#0d1b12] font-black">{res.score}/100</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsProgressScreen;
