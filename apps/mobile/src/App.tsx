import { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppHeader, AppFooter, SideMenu } from '@/components';
import { Main } from '@/pages/Main.tsx';
import { LibraryInformation } from '@/pages/LibraryInformation';
import { MyLibrary } from '@/pages/MyLibrary';
import { Notice } from '@/pages/Notice';
import { Search } from '@/pages/Search';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenSideMenu = (status: boolean) => {
    setIsMenuOpen(status);
  };
  return (
    <div className="w-full h-dvh max-w-[480px] mx-auto flex flex-col">
      <BrowserRouter>
        {isMenuOpen && <SideMenu isOpen={isMenuOpen} closeMenu={handleOpenSideMenu} />}
        <AppHeader />
        <main className="flex-1 flex flex-col overflow-y-auto">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/info" element={<LibraryInformation />} />
            <Route path="/search" element={<Search />} />
            <Route path="/myLib" element={<MyLibrary />} />
            <Route path="/notice" element={<Notice />} />
          </Routes>
        </main>
        <AppFooter openMenu={handleOpenSideMenu} />
      </BrowserRouter>
    </div>
  );
};

export { App };
