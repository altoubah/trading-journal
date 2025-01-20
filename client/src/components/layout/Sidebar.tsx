import React, { type FC, useState } from 'react';

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: 'Dashboard', href: '/' },
  { name: 'Journal', href: '/journal' },
  { name: 'Analytics', href: '/analytics' },
  { name: 'Community', href: '/community' }
];

const Sidebar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="h-full">
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-grow flex-col bg-zinc-900/95 border-r border-amber-900/20">
          <div className="flex items-center h-16 px-4 border-b border-amber-900/20">
            <h1 className="text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
              Trading Journal
            </h1>
          </div>

          <nav className="flex-1 px-2 py-4 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-300 hover:bg-black/40 hover:text-amber-400 transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 left-4 z-40 p-2 rounded-md bg-zinc-800 text-amber-400"
        >
          Menu
        </button>

        {isMobileMenuOpen && (
          <>
            <div 
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="fixed inset-y-0 left-0 z-40 w-64 bg-zinc-900/95 border-r border-amber-900/20">
              <div className="flex items-center h-16 px-4 border-b border-amber-900/20">
                <h1 className="text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                  Trading Journal
                </h1>
              </div>
              <nav className="px-2 py-4 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-300 hover:bg-black/40 hover:text-amber-400 transition-all duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
