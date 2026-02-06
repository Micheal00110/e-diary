
import React from 'react';

interface WeeklyReviewScreenProps {
  onBack: () => void;
}

const REVIEWS = [
  {
    week: "Term 3, Week 5",
    dates: "7th - 11th Oct 2024",
    behavior: "Excellent",
    academic: "Showing great improvement in Science calculations.",
    attendance: "5/5 Days",
    remark: "John was very helpful to his classmates during the tree planting activity. He is becoming a true leader."
  },
  {
    week: "Term 3, Week 4",
    dates: "30th Sept - 4th Oct 2024",
    behavior: "Good",
    academic: "Needs more focus on Kiswahili composition (Insha).",
    attendance: "4/5 Days (Excused)",
    remark: "Keep practicing the spelling of common words. He missed one day due to a dentist appointment."
  }
];

const WeeklyReviewScreen: React.FC<WeeklyReviewScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-[#fcfdfa] min-h-screen">
      <header className="flex items-center p-4 bg-white border-b border-[#cfe7d7] sticky top-0 z-10">
        <button onClick={onBack} className="text-[#0d1b12] flex size-12 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
        </button>
        <h2 className="text-[#0d1b12] text-lg font-black flex-1 text-center pr-12 uppercase tracking-tighter">Weekly Reviews</h2>
      </header>

      <div className="p-4 space-y-6">
        {REVIEWS.map((review, idx) => (
          <div key={idx} className="bg-white rounded-3xl border-2 border-[#cfe7d7] overflow-hidden shadow-md">
            <div className="bg-[#f0f9f2] p-4 border-b-2 border-[#cfe7d7] flex justify-between items-center">
              <div>
                <h3 className="text-[#0d1b12] font-black text-lg">{review.week}</h3>
                <p className="text-[10px] text-[#4c9a66] font-bold uppercase">{review.dates}</p>
              </div>
              <div className="bg-[#13ec5b] text-[#0d1b12] text-[10px] font-black px-3 py-1 rounded-full border border-[#0fb84a]">
                VERIFIED
              </div>
            </div>

            <div className="p-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-[#4c9a66]">Behavior</p>
                  <p className="text-sm font-black text-[#0d1b12]">{review.behavior}</p>
                </div>
                <div className="space-y-1 text-right">
                  <p className="text-[10px] font-black uppercase text-[#4c9a66]">Attendance</p>
                  <p className="text-sm font-black text-[#0fb84a]">{review.attendance}</p>
                </div>
              </div>

              <div className="space-y-1 pt-2 border-t border-[#cfe7d7]">
                <p className="text-[10px] font-black uppercase text-[#4c9a66]">Academic Progress</p>
                <p className="text-sm text-[#0d1b12] leading-relaxed italic">"{review.academic}"</p>
              </div>

              <div className="bg-[#f8fcf9] p-4 rounded-2xl border border-dashed border-[#cfe7d7] mt-4">
                <p className="text-[10px] font-black uppercase text-[#4c9a66] mb-2">Teacher's Weekly Closing Remark</p>
                <p className="text-sm text-[#0d1b12] leading-relaxed font-medium">
                  {review.remark}
                </p>
                <div className="mt-4 flex justify-end">
                   <div className="text-right">
                      <div className="h-8 border-b border-[#0d1b12]/20 font-serif italic text-sm px-4">Mrs. Okoth</div>
                      <p className="text-[8px] font-bold uppercase text-[#4c9a66] mt-1">Class Teacher</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 pt-0">
        <button className="w-full border-2 border-[#cfe7d7] text-[#4c9a66] font-black py-4 rounded-2xl hover:bg-[#e7f3eb] transition-colors uppercase tracking-widest text-xs">
          View Previous Term Reviews
        </button>
      </div>
    </div>
  );
};

export default WeeklyReviewScreen;
