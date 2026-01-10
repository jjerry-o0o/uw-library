import { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppHeader, AppFooter, SideMenu } from '@/components';
import { Main } from '@/pages/Main';
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
    <>
      <BrowserRouter>
        {isMenuOpen && <SideMenu />}
        <AppHeader />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/info" element={<LibraryInformation />} />
          <Route path="/search" element={<Search />} />
          <Route path="/myLib" element={<MyLibrary />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>
        <AppFooter openMenu={handleOpenSideMenu} />
      </BrowserRouter>
    </>
  );
};

export { App };
