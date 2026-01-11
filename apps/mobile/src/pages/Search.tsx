const Search = () => {
  return (
    <div className="min-h-full flex flex-col">
      <p>찾으시는 도서를 검색해보세요</p>
      <select name="searchType" id="searchType">
        <option value="ALL">전체</option>
        <option value="TITLE">도서명</option>
        <option value="AUTHOR">저자</option>
        <option value="PUBLISHER">출판사</option>
      </select>
      <input type="text" />
      <div>
        <span>
          <input type="checkbox" id="searchTotalLibrary" name="searchTotalLibrary" />
          <label htmlFor="searchTotalLibrary">도서관 전체 선택</label>
        </span>
        <br />
        <span>
          <input type="checkbox" id="searchTotalLibrary" name="searchTotalLibrary" />
          <label htmlFor="searchTotalLibrary">개나리 도서관 선택</label>
        </span>
        <span>
          <input type="checkbox" id="searchTotalLibrary" name="searchTotalLibrary" />
          <label htmlFor="searchTotalLibrary">진달래 도서관 선택</label>
        </span>
        <span>
          <input type="checkbox" id="searchTotalLibrary" name="searchTotalLibrary" />
          <label htmlFor="searchTotalLibrary">무궁화 도서관 선택</label>
        </span>
      </div>
      <li>
        <ul>
          <div>
            <img src="" alt="" />
            <span>book</span>
            <br />
            <button>책드림신청</button>
            <button>무인예약신청</button>
            <button>도서예약신청</button>
          </div>
        </ul>
        <ul>book 2</ul>
        <ul>book 3</ul>
        <ul>book 4</ul>
        <ul>book 5</ul>
      </li>
    </div>
  );
};

export { Search };
