import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ServicesPage } from './pages/ServicesPage';
import { HomePage } from './pages/HomePage';
import { MyBookingsPage } from './pages/MyBookingsPage';
import { SearchOverlay } from './components/SearchOverlay';
import { LocationModal } from './components/LocationModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { BookingModal } from './components/BookingModal';
import { BookingConfirmationModal } from './components/BookingConfirmationModal';
import { ToastContainer } from './components/ToastContainer';

const MainContent: React.FC = () => {
  const { viewMode } = useApp();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-1">
        {viewMode === 'catalog' && <ServicesPage />}
        {viewMode === 'landing' && <HomePage />}
        {viewMode === 'bookings' && <MyBookingsPage />}
      </div>

      <Footer />

      {/* Global Modals & Overlays */}
      <SearchOverlay />
      <LocationModal />
      <ServiceDetailModal />
      <BookingModal />
      <BookingConfirmationModal />
      <ToastContainer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
};

export default App;
