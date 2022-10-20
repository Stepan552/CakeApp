import React from "react";

const NotFound = () => {
  return (
    <div className="not_found">
      <div className="container">
        <div className="not_found__column">
          <h1>Сторінка не знайдена!😲</h1>
          <p>
            Дана сторінка не була знайдена, перевірте <br />
            вірність вказаного URL в адресній строці...
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
