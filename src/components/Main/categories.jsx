import React from 'react';

const Categories = () => {
  return (
    <div className="main_categories">
      <div className="main_search">
        <img src="../assets/icon-search.png" width={20} alt="" />
        <input type="text" placeholder="Поиск по звонкам" />
      </div>
      <span>
        Все типы <img src="../assets/icon-down.png" width={25} />
      </span>
      <span>
        Все сотрудники <img src="../assets/icon-down.png" width={25} />
      </span>
      <span>
        Все звонки <img src="../assets/icon-down.png" width={25} />
      </span>
      <span>
        Все источники <img src="../assets/icon-down.png" width={25} />
      </span>
      <span>
        Все оценки <img src="../assets/icon-down.png" width={25} />
      </span>
      <span>
        Все ошибки <img src="../assets/icon-down.png" width={25} />
      </span>
    </div>
  );
};

export default Categories;
