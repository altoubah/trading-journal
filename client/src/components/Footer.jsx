import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center p-3 mt-5">
      <p className="mb-0">
        © {new Date().getFullYear()} TradingJournal (Placeholder Company). All rights reserved.
      </p>
    </footer>
  );
}
