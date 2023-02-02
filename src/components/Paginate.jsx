import React, { useState, useEffect } from "react";
import Pagination from 'react-bootstrap/Pagination';

const Paginate = ({ setCurrentPage, pages }) => {
  const [currentButton, setCurrentButton] = useState(1);
  const numOfPages = [];

  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton, setCurrentPage]);

  return (
    <div>
      <Pagination className="mt-4">
        <Pagination.Prev
          className={`${currentButton === 1 ? "disabled" : null}`}
          onClick={() =>
            setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
          }
        />
        {numOfPages.map((page, index) => {
          return (
            <Pagination.Item
              key={index}
              className={`${currentButton === page ? "active" : null}`}
              onClick={() => setCurrentButton(page)}
            >
              {page}
            </Pagination.Item>
          );
        })}
        <Pagination.Next
          className={`${
            numOfPages.length === currentButton ? "disabled" : null
          }`}
          onClick={() =>
            setCurrentButton((prev) =>
              prev === numOfPages.length ? prev : prev + 1
            )
          }
        />
      </Pagination>
    </div>
  );
};

export default Paginate
