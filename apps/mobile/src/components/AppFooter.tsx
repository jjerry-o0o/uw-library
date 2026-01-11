import { Link } from 'react-router-dom';

interface AppHeaderProps {
  openMenu: (status: boolean) => void;
}

const AppFooter = ({ openMenu }: AppHeaderProps) => {
  return (
    <nav className="h-16 shrink-0 flex items-center justify-between px-[10%] bg-amber-100">
      <Link to="/">홈</Link>
      <Link to="/search">검색</Link>
      <Link to="myLib">내서재</Link>
      <button type="button" onClick={() => openMenu(true)}>
        메뉴
      </button>
    </nav>
  );
};

export { AppFooter };
