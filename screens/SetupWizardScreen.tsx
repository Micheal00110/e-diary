
import React, { useState } from 'react';

interface SetupWizardScreenProps {
  onComplete: () => void;
  onBack: () => void;
}

const SetupWizardScreen: React.FC<SetupWizardScreenProps> = ({ onComplete, onBack }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else onComplete();
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
    else onBack();
  };

  return (
    <div className="bg-[#f8fcf9] min-h-screen">
      <header className="flex items-center p-4 bg-[#f8fcf9] sticky top-0 z-10">
        <button onClick={prevStep} className="text-[#0d1b12] flex size-12 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
        </button>
        <h2 className="text-[#0d1b12] text-lg font-bold flex-1 text-center pr-12">Setup Wizard</h2>
      </header>

      <div className="p-4">
        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className={`size-3 rounded-full transition-all duration-300 ${s <= step ? 'bg-[#facc15]' : 'bg-[#e7edf3]'}`}
            />
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div className="mb-8">
              <h1 className="text-[#0d1b12] text-3xl font-black mb-2">School Details</h1>
              <p className="text-[#4c9a66]">Let's get started by adding your school's information.</p>
            </div>
            <input placeholder="School Name" className="w-full h-14 bg-[#e7f3eb] border-none rounded-xl px-4 text-[#0d1b12] placeholder:text-[#4c9a66]" />
            <input placeholder="Location" className="w-full h-14 bg-[#e7f3eb] border-none rounded-xl px-4 text-[#0d1b12] placeholder:text-[#4c9a66]" />
            <button onClick={nextStep} className="w-full bg-[#13ec5b] text-[#0d1b12] font-bold py-4 rounded-xl mt-4 shadow-lg active:scale-[0.98] transition-all">Next</button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="mb-8">
              <h1 className="text-[#0d1b12] text-3xl font-black mb-2">Create Classes</h1>
              <p className="text-[#4c9a66]">Organize your students into grades or streams.</p>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-white/50 border border-[#cfe7d7] rounded-xl">
                <input placeholder="Class Name (e.g. Grade 4A)" className="w-full h-12 bg-transparent border-b border-[#cfe7d7] mb-4 text-[#0d1b12] focus:ring-0 focus:border-[#13ec5b]" />
                <input placeholder="Student Capacity" type="number" className="w-full h-12 bg-transparent border-none text-[#0d1b12] focus:ring-0" />
              </div>
              <button className="text-[#1380ec] font-bold text-sm bg-[#e7f3eb] px-4 py-2 rounded-lg">+ Add Another Class</button>
            </div>
            <div className="flex gap-4 mt-8">
              <button onClick={prevStep} className="flex-1 bg-[#e7f3eb] text-[#0d1b12] font-bold py-4 rounded-xl active:scale-[0.98] transition-all">Back</button>
              <button onClick={nextStep} className="flex-1 bg-[#1380ec] text-white font-bold py-4 rounded-xl active:scale-[0.98] transition-all">Next</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="mb-8">
              <h1 className="text-[#0d1b12] text-3xl font-black mb-2">Invite Teachers</h1>
              <p className="text-[#4c9a66]">Grant access to the Teacher Interface via phone numbers.</p>
            </div>
            <div className="space-y-4">
              <input placeholder="Teacher Name" className="w-full h-14 bg-[#e7f3eb] border-none rounded-xl px-4 text-[#0d1b12] placeholder:text-[#4c9a66]" />
              <input placeholder="Phone Number" className="w-full h-14 bg-[#e7f3eb] border-none rounded-xl px-4 text-[#0d1b12] placeholder:text-[#4c9a66]" />
              <div className="flex gap-2">
                <button className="flex-1 text-sm bg-[#e7f3eb] py-2 rounded-lg font-bold">Import Contacts</button>
                <button className="flex-1 text-sm bg-[#e7f3eb] py-2 rounded-lg font-bold">Upload CSV</button>
              </div>
            </div>
            <button onClick={nextStep} className="w-full bg-[#facc15] text-[#0d1b12] font-bold py-4 rounded-xl mt-12 shadow-lg active:scale-[0.98] transition-all">Complete Setup</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SetupWizardScreen;
