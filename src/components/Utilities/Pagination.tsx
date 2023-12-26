import React from 'react';

interface pageProps {
  page: number;
  lastPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
const Pagination: React.FC<pageProps> = ({ page, lastPage, setPage }) => {
  const handleNext = () => {
    setPage((prevState) => prevState + 1);
    scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };
  const handlePrev = () => {
    if (page > 1) {
      setPage((prevState) => prevState - 1);
      scrollTo({
        behavior: 'smooth',
        top: 0,
      });
    }
  };
  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary">
      <button className="transition-all hover:text-color-accent " onClick={handlePrev}>
        Prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button className="transition-all hover:text-color-accent" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
