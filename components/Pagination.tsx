import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers: number[] = [];
  const maxPageButtons = 5;

  if (totalPages <= maxPageButtons) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) pageNumbers.push(-1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages - 1) {
      pageNumbers.push(-1);
      pageNumbers.push(totalPages);
    }
  }

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="pagination-container text-center mt-4 flex justify-center items-center space-x-2">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        &lt;
      </button>
      {pageNumbers.map((number, index) => (
        <React.Fragment key={index}>
          {number === -1 ? (
            <span>...</span>
          ) : (
            <button
              onClick={() => handlePageClick(number)}
              className={currentPage === number ? "font-bold underline" : ""}
            >
              {number}
            </button>
          )}
        </React.Fragment>
      ))}
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
