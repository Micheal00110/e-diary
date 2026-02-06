
import React from 'react';

interface EnterResultsScreenProps {
  onBack: () => void;
}

const EnterResultsScreen: React.FC<EnterResultsScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-[#fcfdfa] min-h-screen">
      <header className="flex items-center p-4 bg-white border-b border-[#cfe7d7] sticky top-0 z-10">
        <button onClick={onBack} className="text-[#0d1b12] flex size-12 items-center">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>
        </button>
        <h2 className="text-[#0d1b12] text-lg font-black flex-1 text-center pr-12 uppercase">Enter Results</h2>
      </header>

      <div className="p-4 space-y-4">
        <div className="flex gap-2">
          <select className="flex-1 h-12 bg-[#f0f9f2] border-2 border-[#cfe7d7] rounded-xl px-4 text-sm font-bold">
            <option>Math - CAT 1</option>
            <option>English - Mid Term</option>
            <option>Science - Project</option>
          </select>
          <div className="bg-[#facc15] text-[#0d1b12] px-4 rounded-xl flex items-center justify-center font-black text-xs uppercase">Edit</div>
        </div>

        <div className="space-y-1 rounded-2xl border-2 border-[#cfe7d7] overflow-hidden bg-white">
          <ResultRow name="John Mwangi" />
          <ResultRow name="Mary Kamau" />
          <ResultRow name="David Omondi" />
          <ResultRow name="Sarah Njeri" />
          <ResultRow name="Kevin Otieno" />
        </div>

        <button 
          onClick={onBack}
          className="w-full bg-[#13ec5b] text-[#0d1b12] font-black py-4 rounded-xl shadow-lg mt-4 uppercase tracking-widest border-b-4 border-[#0fb84a]"
        >
          Save All Results
        </button>
      </div>
    </div>
  );
};

const ResultRow = ({ name }: { name: string }) => (
  <div className="flex items-center justify-between p-4 border-b border-[#cfe7d7] last:border-b-0">
    <span className="font-bold text-[#0d1b12] text-sm">{name}</span>
    <input 
      type="number" 
      placeholder="00"
      className="w-16 h-10 bg-[#f8fcf9] border border-[#cfe7d7] rounded-lg text-center font-black text-[#1380ec]" 
    />
  </div>
);

export default EnterResultsScreen;
