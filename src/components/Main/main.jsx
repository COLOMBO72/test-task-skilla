import React from 'react';
import './main.scss';
import Calendar from './calendar';
import Categories from './categories';
import CallBlock from './CallBlock';

const Main = () => {
  return (
    <main>
      <Calendar />
      <div className="main_wrapper">
        <Categories />
        <div className="main_block">
          <div className="filters_block">
            <div className="filters_info">
              <span>Тип</span>
              <span>Время</span>
              <span>Сотрудник</span>
              <span>Звонок</span>
            </div>
            <div>
              <span>Источник</span>
              <span>Оценка</span>
              <span>Длительность</span>
            </div>
          </div>
          <CallBlock />
        </div>
      </div>
    </main>
  );
};

export default Main;
