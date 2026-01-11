const AppHeader = () => {
  return (
    <header className="flex justify-between items-center h-14 shrink-0 px-[4%]">
      <div className="flex flex-1 justify-start">
        <button className="border border-black">이전</button>
      </div>
      <div className="felx-none justify-center border border-black">
        <span className="">로고</span>
      </div>
      <div className="flex flex-1 justify-end">
        <div>?</div>
      </div>
    </header>
  );
};

export { AppHeader };
