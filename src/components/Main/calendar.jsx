import React from 'react';

const Calendar = () => {
  return (
    <div className="info_wrapper">
      <div className="balance_wrap">
        <div>
          <span>
            Баланс: <b>272 Р</b> <img src="../assets/icon-plus.png" width={24} alt="" />
          </span>
        </div>
      </div>
      <div className="calendar">
        <img src="../assets/icon-left-chevron.png" alt="" />
        <span>
          <img src="../assets/icon-calendar.png" alt="" /> 3 дня
        </span>
        <img src="../assets/icon-right-chevron.png" alt="" />
      </div>
    </div>
  );
};

export default Calendar;
