import { useState } from 'react';

interface SideMenuProps {
  isOpen: boolean;
  closeMenu: (status: boolean) => void;
}

const MenuList = [
  { id: 1, title: '도서관 안내', path: '/', parentId: null, sort_order: 1 },
  { id: 2, title: '도서 검색', path: '/', parentId: null, sort_order: 2 },
  { id: 3, title: '내 서재', path: '/', parentId: null, sort_order: 3 },
  { id: 4, title: '공지사항', path: '/', parentId: null, sort_order: 4 },
  { id: 5, title: '도서관 소개', path: '/', parentId: 1, sort_order: 1 },
  { id: 6, title: '이용 안내', path: '/', parentId: 1, sort_order: 2 },
  { id: 7, title: '통합 검색', path: '/', parentId: 2, sort_order: 1 },
  { id: 8, title: '대출 베스트', path: '/', parentId: 2, sort_order: 2 },
  { id: 9, title: '신착 도서', path: '/', parentId: 2, sort_order: 3 },
  { id: 10, title: '도서 이용 정보', path: '/', parentId: 3, sort_order: 1 },
  { id: 11, title: '관심 도서 목록', path: '/', parentId: 3, sort_order: 2 },
  { id: 12, title: '나의 신청 정보', path: '/', parentId: 3, sort_order: 3 },
  { id: 13, title: '공지사항', path: '/', parentId: 4, sort_order: 1 },
];

const SideMenu = ({ isOpen, closeMenu }: SideMenuProps) => {
  const [selectedMenuId, setSelectedMenuId] = useState<number>(MenuList[0].id);
  const subMenuList = MenuList.filter(menu => menu.parentId === selectedMenuId);
  return (
    <aside
      className={`fixed top-0 right-0 h-full w-full bg-amber-200 z-[101] transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="flex justify-between items-center h-14 px-[4%]">
        <span>로그인을 해주세요.</span>
        <button type="button" onClick={() => closeMenu(false)}>
          X
        </button>
      </div>
      <div className="flex h-full">
        <div className="flex flex-col border border-black w-[35%] ">
          {MenuList.filter(menu => menu.parentId === null).map(mainMenu => (
            <button type="button" key={mainMenu.id} onClick={() => setSelectedMenuId(mainMenu.id)}>
              {mainMenu.title}
            </button>
          ))}
        </div>
        <div id="subMenu_1" className="flex flex-col border border-black w-full">
          {subMenuList.map(subMenu => (
            <button type="button" key={subMenu.id}>
              {subMenu.title}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col"></div>
    </aside>
  );
};

export { SideMenu };
