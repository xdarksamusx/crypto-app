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
  const pageNumbers: number[] = []; // Specify type as number[]
  const maxPageButtons = 5; // Number of page buttons to show

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 || // Always show the first page
      i === totalPages || // Always show the last page
      (i >= currentPage - 2 && i <= currentPage + 2) // Show pages around the current page
    ) {
      pageNumbers.push(i);
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
        &lt; {/* Left arrow */}
      </button>
      {pageNumbers.map((number, index) => (
        <React.Fragment key={number}>
          {index > 0 && pageNumbers[index - 1] !== number - 1 && (
            <span>...</span> // Ellipsis for skipped pages
          )}
          <button
            onClick={() => handlePageClick(number)}
            className={currentPage === number ? "font-bold" : ""}
          >
            {number}
          </button>
        </React.Fragment>
      ))}
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        &gt; {/* Right arrow */}
      </button>
    </div>
  );
};

export default Pagination;
