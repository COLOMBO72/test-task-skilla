import React from 'react';
import './header.scss';
import ProgressBar from '../Progressbar/Progressbar';

const Header = () => {
  const bar1 = { bgcolor: '#28A879', completed: 40 };
  const bar2 = { bgcolor: '#FFD500', completed: 40 };
  const bar3 = { bgcolor: '#EA1A4F', completed: 67 };

  return (
    <header>
      <span className="header_date">Среда, 13 окт</span>
      <div className="bar_maths">
        <span>
          Новые звонки <p>20 из 30шт</p>
        </span>
        <ProgressBar bgcolor={bar1.bgcolor} completed={bar1.completed} />
      </div>
      <div className="bar_maths">
        <span>
          Качество разговоров <p>40%</p>
        </span>
        <ProgressBar bgcolor={bar2.bgcolor} completed={bar2.completed} />
      </div>
      <div className="bar_maths">
        <span>
          Конверсия в заказ<p>67%</p>
        </span>
        <ProgressBar bgcolor={bar3.bgcolor} completed={bar3.completed} />
      </div>
      <div className="profile_block_header">
        <img src="../assets/icon-search.png" width={25} className="icon_search" />
        <div className="name_wrap">
          <span>
            ИП Сидорова Александра Михайловна <img src="../assets/icon-down.png" width={20} />
          </span>
        </div>
        <div className="ava_wrap">
          <img src="../assets/avatar.jpg" width={40} className="avatar" />
          <img src="../assets/icon-down.png" width={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
