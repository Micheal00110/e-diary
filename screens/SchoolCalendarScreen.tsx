
import React from 'react';

interface SchoolCalendarScreenProps {
  onBack: () => void;
}

const EVENTS = [
  { date: 'OCT 15', title: 'Mid-term Exams Begin', type: 'Academic' },
  { date: 'OCT 20', title: 'Mashujaa Day (Holiday)', type: 'Public Holiday' },
  { date: 'OCT 25', title: 'Annual Sports Day', type: 'Extra-curricular' },
  { date: 'NOV 02', title: 'Parent-Teacher Meeting', type: 'Engagement' },
];

const SchoolCalendarScreen: React.FC<SchoolCalendarScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-[#f8fcf9] min-h-screen">
      <header className="flex items-center p-4 bg-white border-b border-[#cfe7d7] sticky top-0 z-10">
        <button onClick={onBack} className="text-[#0d1b12] flex size-12 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
        </button>
        <h2 className="text-[#0d1b12] text-lg font-bold flex-1 text-center pr-12">School Calendar</h2>
      </header>
      <div className="p-4 space-y-4">
        {EVENTS.map((event, idx) => (
          <div key={idx} className="flex gap-4 items-center bg-white p-4 rounded-2xl border border-[#cfe7d7] shadow-sm">
            <div className="flex flex-col items-center justify-center bg-[#f0f9f2] text-[#0d1b12] size-16 rounded-xl border border-[#cfe7d7]">
              <span className="text-[10px] font-black leading-none opacity-50">{event.date.split(' ')[0]}</span>
              <span className="text-xl font-black">{event.date.split(' ')[1]}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-[#0d1b12] font-bold text-sm leading-tight">{event.title}</h3>
              <span className="text-[10px] font-bold uppercase text-[#4c9a66] tracking-widest">{event.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolCalendarScreen;
