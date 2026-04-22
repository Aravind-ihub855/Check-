import React from 'react';
import LandingPage from './pages/LandingPage';

/**
 * App Component
 * Serves as the entry point and manages top-level layout/navigation state.
 */
const App: React.FC = () => {
  // In a real app, this might manage global routing or auth state
  // For this landing page prototype, we are rendering the LandingPage component
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      <LandingPage />
    </div>
  );
};

export default App;