import React, { type FC } from 'react';

const PricingPage: FC = () => {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl font-bold text-white text-center">
            Choose Your Plan
          </h1>
          <p className="mt-5 text-xl text-gray-400 text-center">
            Start free and upgrade as you grow
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto">
          {/* Free Tier */}
          <div className="bg-zinc-900/50 border border-amber-900/20 rounded-lg shadow-lg divide-y divide-zinc-800">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-white">Basic</h2>
              <p className="mt-4 text-gray-400">Perfect for getting started</p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-white">Free</span>
              </p>
              <button className="mt-8 w-full bg-amber-500 hover:bg-amber-600 text-black font-medium py-2.5 px-4 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
            <div className="px-6 pt-6 pb-8">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wide">
                What's included
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-400">Basic trade logging</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-400">Basic analytics</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-400">Community access</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pro Tier */}
          <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg shadow-lg divide-y divide-zinc-800 ring-2 ring-amber-500">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-white">Pro</h2>
              <p className="mt-4 text-gray-400">For serious traders</p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-white">$29</span>
                <span className="text-base font-medium text-gray-400">/mo</span>
              </p>
              <button className="mt-8 w-full bg-amber-500 hover:bg-amber-600 text-black font-medium py-2.5 px-4 rounded-lg transition-colors">
                Upgrade to Pro
              </button>
            </div>
            <div className="px-6 pt-6 pb-8">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wide">
                Everything in Basic, plus:
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-400">Advanced analytics</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-400">Brokerage integration</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-400">Priority support</span>
                </li>
                <li className="flex space-x-3">
                  <svg className="flex-shrink-0 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-400">Advanced reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;