import React, { useState } from 'react';
import { PricingPlan } from '../types';

interface PricingScreenProps {
  onBack: () => void;
  onProceed: () => void;
}

const PLANS: PricingPlan[] = [
  {
    name: 'Free Trial',
    price: '0',
    billing: '/7 days',
    features: ['Full access for 1 week', 'Up to 50 students', 'Digital Support'],
  },
  {
    name: 'Basic',
    price: '10,000',
    billing: '/term',
    features: ['Up to 100 students', 'Full Monitoring', 'Teacher Training'],
  },
  {
    name: 'Standard',
    price: '25,000',
    billing: '/term',
    features: ['Up to 500 students', 'Full Monitoring', 'Teacher Training', 'Priority Support'],
    recommended: true,
  },
  {
    name: 'Premium',
    price: '50,000',
    billing: '/term',
    features: ['Unlimited students', 'Full Monitoring', 'Teacher Training', 'Priority Support', 'Custom Features'],
  },
];

const PricingScreen: React.FC<PricingScreenProps> = ({ onBack, onProceed }) => {
  const [selectedPlan, setSelectedPlan] = useState('Standard');

  return (
    <div className="bg-[#f8fcf9] min-h-screen">
      <div className="flex items-center p-4 sticky top-0 bg-[#f8fcf9] z-10">
        <button onClick={onBack} className="text-[#0d141b] flex size-12 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
        </button>
        <h2 className="text-[#0d141b] text-lg font-bold flex-1 text-center pr-12">Pricing</h2>
      </div>

      <h1 className="text-[#0d141b] text-2xl font-bold px-4 py-5">Choose a plan</h1>

      <div className="px-4 space-y-3">
        {PLANS.map((plan) => (
          <div 
            key={plan.name}
            onClick={() => setSelectedPlan(plan.name)}
            className={`flex flex-col gap-4 rounded-xl border p-6 cursor-pointer transition-all ${
              selectedPlan === plan.name 
                ? 'border-[#1380ec] bg-blue-50/50 ring-1 ring-[#1380ec]' 
                : 'border-[#cfdbe7] bg-white'
            }`}
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-[#0d141b] text-base font-bold">{plan.name}</h3>
                  {plan.name === 'Free Trial' && (
                    <span className="bg-[#facc15] text-[#0d1b12] text-[10px] font-black px-2 py-0.5 rounded uppercase">Free</span>
                  )}
                </div>
                {plan.recommended && (
                  <span className="text-white text-xs font-bold rounded-lg bg-[#1380ec] px-3 py-1">Recommended</span>
                )}
              </div>
              <p className="flex items-baseline gap-1 text-[#0d141b]">
                <span className="text-3xl font-black">{plan.price === '0' ? 'FREE' : `Ksh ${plan.price}`}</span>
                <span className="text-sm font-bold opacity-60">{plan.billing}</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {plan.features.map((feature) => (
                <div key={feature} className="text-sm flex gap-3 text-[#0d141b] items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" className="text-[#13ec5b]" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-[#0d141b] text-2xl font-bold px-4 pt-8 pb-3">Checkout</h1>
      
      <div className="px-4 space-y-4">
        <input 
          placeholder="School Name"
          className="w-full h-14 bg-[#e7edf3] border-none rounded-xl px-4 text-[#0d141b] placeholder:text-[#4c739a]"
        />
        <input 
          placeholder="Estimated Student Count"
          className="w-full h-14 bg-[#e7edf3] border-none rounded-xl px-4 text-[#0d141b] placeholder:text-[#4c739a]"
        />
        <select className="custom-select-arrow w-full h-14 bg-[#e7edf3] border-none rounded-xl px-4 text-[#0d141b]">
          <option>Payment Method</option>
          <option>M-PESA</option>
          {/* Fixed invalid JSX attribute syntax on line 111: changed {condition ? 'attr' : ''} to attr={condition} */}
          <option selected={selectedPlan === 'Free Trial'}>No Payment (Free Trial)</option>
          <option>Bank Transfer</option>
          <option>Credit Card</option>
        </select>
        
        <button 
          onClick={onProceed}
          className="w-full bg-[#1380ec] text-white font-bold py-4 rounded-xl text-lg mt-4 shadow-lg active:scale-[0.98] transition-all"
        >
          {selectedPlan === 'Free Trial' ? 'Start Free Trial' : 'Proceed to Payment'}
        </button>
      </div>
      <div className="h-12"></div>
    </div>
  );
};

export default PricingScreen;