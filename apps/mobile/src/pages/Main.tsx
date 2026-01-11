import { useState } from 'react';

import { Button } from '@uw-library/ui';

import { useBestBooks } from '@/hooks/useMainApi';

const Main = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const bestBooks = useBestBooks();
  return (
    <div className="min-h-full flex flex-col">
      <div className="h-[30dvh] max-h-60 border border-black shrink-0">
        상단 배너 영역 (배너도 반응형으로)
        <Button variant="outline">Button</Button>
      </div>
      <div className="flex h-[20dvh] max-h-40 px-[4%] items-center shrink-0">
        <div className="h-[16dvh] max-h-30 w-full border border-black shrink-0">
          중간에 회원 바코드 영역 <br /> (이미지 세로 기준 + 비율 고정)
        </div>
      </div>
      <div className="h-[35dvh] max-h-50 border border-black shrink-0">
        공지 사항 영역
        {/*<Calendar*/}
        {/*  mode="single"*/}
        {/*  selected={date}*/}
        {/*  onSelect={setDate}*/}
        {/*  className="rounded-md border shadow-sm"*/}
        {/*  captionLayout="dropdown"*/}
        {/*/>*/}
      </div>
      <div className="flex-1 border border-black shrink-0">
        신착 도서 / 대출 베스트 영역
        <div className="bg-white radh-[500px]">
          {!bestBooks.isLoading &&
            bestBooks.data.map(book => (
              <div key={book.id}>
                <img src={book.imageUrl} alt={book.title} className="h-10 w-10" />
                <Button className="" variant="outline">
                  버튼
                </Button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export { Main };
